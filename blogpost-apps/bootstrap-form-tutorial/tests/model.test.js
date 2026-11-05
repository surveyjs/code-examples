import test from "node:test";
import assert from "node:assert/strict";
import { Model, Serializer, setupThemeAdapter } from "survey-core";
import { makeDefinition } from "../src/survey/definition.js";
import { normalizeOptions } from "../src/shared/scenario.js";
import {
  emergencyPhoneRequired,
  homeWorker,
  officeWorker,
  deliveryRequired,
} from "../src/native/rules.js";
import { toPayload } from "../src/shared/contract.js";

const contact = {
  name: "Lee",
  relationship: "Friend",
  contactMethod: "email",
  email: "lee@example.com",
};
const data = {
  name: "Ada",
  email: "ada@example.com",
  department: "Engineering",
  workMode: "remote",
  contractType: "fixed",
  startDate: "2027-01-10",
  contractEnd: "2027-06-10",
  homeAddress: "10 Example Street",
  relocates: "no",
  contacts: [contact],
  confirmation: ["confirmed"],
};

for (const variant of ["new-hire", "profile-update"])
  for (const revision of ["original", "revised"]) {
    test(`shared contact policy and screen-specific delivery rule: ${variant}, ${revision}`, () => {
      const options = normalizeOptions({ stage: 5, variant, revision });
      const model = new Model(makeDefinition(options));
      model.data = structuredClone(data);

      const row = model.getQuestionByName("contacts").panels[0];
      for (const method of ["email", "phone"]) {
        row.getQuestionByName("contactMethod").value = method;
        assert.equal(
          row.getQuestionByName("phone").isVisible,
          emergencyPhoneRequired(method, options),
        );
        assert.equal(
          row.getQuestionByName("email").isVisible,
          method === "email",
        );
      }

      for (const mode of ["remote", "office", "hybrid"]) {
        model.setValue("workMode", mode);
        assert.equal(
          model.getQuestionByName("homeAddress").isVisible,
          homeWorker(mode),
        );
        assert.equal(
          model.getQuestionByName("officeLocation").isVisible,
          officeWorker(mode),
        );
      }

      if (variant === "new-hire")
        assert.equal(
          model.getQuestionByName("deliveryNotes").isRequired,
          deliveryRequired(options),
        );
      else {
        assert.equal(model.getQuestionByName("deliveryNotes"), null);
        assert.equal(model.getQuestionByName("equipment"), null);
      }

      model.dispose();
    });
  }

test("date order is validated, not just whether both dates exist", () => {
  const model = new Model(makeDefinition({ stage: 4 }));
  model.data = structuredClone(data);
  assert.equal(model.validate(), true);

  model.setValue("contractEnd", "2027-01-01");
  assert.equal(model.validate(), false);

  model.setValue("contractType", "permanent");
  assert.equal(model.validate(), true);

  model.dispose();
});

test("conditional page becomes active and inactive without losing its draft", () => {
  const model = new Model(makeDefinition({ stage: 4 }));
  model.data = structuredClone(data);
  assert.equal(model.visiblePages.length, 4);

  model.setValue("relocates", "yes");
  assert.equal(model.visiblePages.length, 5);
  assert.equal(model.validate(), false);

  model.setValue("relocationCity", "Berlin");
  model.setValue("moveDate", "2027-01-15");
  assert.equal(model.validate(), true);

  model.setValue("relocates", "no");
  assert.equal(model.visiblePages.length, 4);
  assert.equal(model.getValue("relocationCity"), "Berlin");

  model.dispose();
});

test("response projection excludes hidden drafts and screen-specific fields", () => {
  const options = normalizeOptions({
    stage: 5,
    variant: "profile-update",
    revision: "revised",
  });

  const payload = toPayload(
    {
      ...data,
      workMode: "office",
      contractType: "permanent",
      officeLocation: "London",
      relocationCity: "Draft",
      equipment: ["Laptop"],
      admin: true,
      contacts: [{ ...contact, phone: "123", notes: "After 6pm", admin: true }],
    },
    options,
  );

  assert.deepEqual(payload, {
    definitionVersion: 2,
    workflow: "profile-update",
    employee: {
      name: "Ada",
      email: "ada@example.com",
      department: "Engineering",
    },
    employment: {
      workMode: "office",
      contractType: "permanent",
      startDate: "2027-01-10",
      officeLocation: "London",
    },
    emergencyContacts: [
      {
        name: "Lee",
        relationship: "Friend",
        contactMethod: "email",
        email: "lee@example.com",
        phone: "123",
        notes: "After 6pm",
      },
    ],
    relocates: false,
    confirmed: true,
  });
});

test("revised policy is enforced in both workflow models", () => {
  for (const variant of ["new-hire", "profile-update"]) {
    const model = new Model(
      makeDefinition({ stage: 5, variant, revision: "revised" }),
    );
    model.data = structuredClone(data);
    assert.equal(model.validate(), false);

    model.setValue("contacts", [{ ...contact, phone: "123" }]);
    if (variant === "new-hire") {
      assert.equal(model.validate(), false);
      model.setValue("deliveryNotes", "Ring the bell");
    }
    assert.equal(model.validate(), true);

    model.dispose();
  }
});

test("pinned setupThemeAdapter changes documented defaults; explicit choices win", () => {
  const description = Serializer.findProperty(
    "survey",
    "questionDescriptionLocation",
  );
  const previous = description.defaultValue;

  setupThemeAdapter("bootstrap");
  assert.equal(description.defaultValue, "underInput");
  assert.equal(
    Serializer.findProperty("survey", "questionErrorLocation").defaultValue,
    "bottom",
  );

  const model = new Model({
    questionDescriptionLocation: "underTitle",
    widthMode: "responsive",
    elements: [{ type: "text", name: "x" }],
  });
  assert.equal(model.questionDescriptionLocation, "underTitle");
  assert.equal(model.widthMode, "responsive");

  model.dispose();
  description.defaultValue = previous;
});

test("dynamic panel button text uses current property names in every stage and revision", () => {
  for (const stage of [3, 4, 5])
    for (const variant of ["new-hire", "profile-update"])
      for (const revision of ["original", "revised"]) {
        const definition = makeDefinition({ stage, variant, revision });
        const model = new Model(definition);
        const json = model.getQuestionByName("contacts").toJSON();
        assert.equal(json.addPanelText, "Add contact");
        assert.equal(json.removePanelText, "Remove contact");

        const text = JSON.stringify(definition);
        assert.ok(!text.includes("panelAddText"));
        assert.ok(!text.includes("panelRemoveText"));

        model.dispose();
      }
});

test("comment fields use the same explicit three-row height as native textareas", () => {
  for (const stage of [2, 3, 4, 5]) {
    const model = new Model(makeDefinition({ stage }));
    assert.equal(model.getQuestionByName("homeAddress").rows, 3);

    const delivery = model.getQuestionByName("deliveryNotes");
    if (delivery) assert.equal(delivery.rows, 3);

    model.dispose();
  }
});
