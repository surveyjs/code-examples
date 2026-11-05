import { initialData, sampleData } from "../shared/sample-data.js";
import { preview } from "../shared/contract.js";
import {
  homeWorker,
  officeWorker,
  emergencyPhoneRequired,
  deliveryRequired,
} from "./rules.js";

import { contactFields } from "./contact-fields.js";

const mark = '<span class="required-marker" aria-hidden="true">*</span>';

// These helpers format trusted application-owned markup. They do not interpret SurveyJS JSON.
function field(
  name,
  title,
  { type = "text", required = false, choices, key, hidden = false } = {},
) {
  const attrs = `id="${name}" aria-describedby="${name}-error" name="${name}" ${key ? `data-key="${key}"` : ""} ${required ? "required" : ""}`;
  const control = choices
    ? `<select class="form-select" ${attrs}><option value="">Select...</option>${choices.map((c) => `<option value="${c[0]}">${c[1]}</option>`).join("")}</select>`
    : type === "textarea"
      ? `<textarea class="form-control" rows="3" ${attrs}></textarea>`
      : `<input class="form-control" type="${type}" ${attrs}>`;

  return `<div class="mb-3" data-field="${name}" ${hidden ? "hidden" : ""}><label class="form-label" for="${name}">${title} <span data-required>${required ? mark : ""}</span></label>${control}<div class="invalid-feedback" id="${name}-error" hidden></div></div>`;
}

function checks(name, title, choices, required = false) {
  return `<fieldset class="mb-3"><legend class="fs-6">${title} ${required ? mark : ""}</legend>${choices.map((c) => `<div class="form-check"><input type="checkbox" class="form-check-input" id="${name}-${c[0]}" name="${name}" value="${c[0]}" aria-describedby="${name}-${c[0]}-error" ${required ? "required" : ""}><label class="form-check-label" for="${name}-${c[0]}">${c[1]}</label><div class="invalid-feedback" id="${name}-${c[0]}-error" hidden></div></div>`).join("")}</fieldset>`;
}

const pairs = (values) => values.map((v) => [v, v]);

export function mount(root, options) {
  const { stage, variant, revision } = options;

  const personal =
    field("name", "Full name", { required: true }) +
    field("email", "Email", { type: "email", required: true }) +
    field("department", "Department", {
      required: true,
      choices: pairs(["Engineering", "Operations", "Sales"]),
    });

  const employment =
    field("workMode", "Work mode", {
      required: true,
      choices: [
        ["office", "Office"],
        ["remote", "Remote"],
        ["hybrid", "Hybrid"],
      ],
    }) +
    field("contractType", "Contract type", {
      required: true,
      choices: [
        ["permanent", "Permanent"],
        ["fixed", "Fixed term"],
      ],
    }) +
    field("startDate", "Start date", { type: "date", required: true }) +
    field("contractEnd", "Contract end date", { type: "date", hidden: true }) +
    field("officeLocation", "Office location", {
      choices: pairs(["London", "Berlin", "Yerevan"]),
      hidden: true,
    }) +
    field("homeAddress", "Home working address", {
      type: "textarea",
      hidden: true,
    }) +
    (stage >= 4
      ? field("relocates", "Are you relocating?", {
          required: true,
          choices: [
            ["no", "No"],
            ["yes", "Yes"],
          ],
        })
      : "");

  const contacts = `<div class="card"><div class="px-3 pt-3 pb-2"><h3 id="contacts-title" tabindex="-1" class="fs-6 lh-base fw-normal mb-0">Emergency contacts</h3><p class="small text-body-secondary mb-0">Include 1 to 3 emergency contacts.</p></div><div class="px-3"><div id="contacts" class="px-3"></div></div><div class="p-3 mx-3 border-top"><button type="button" class="btn btn-sm btn-outline-secondary w-100" id="add-contact">Add contact</button></div></div>`;

  const relocation =
    field("relocationCity", "Destination city", { required: true }) +
    field("moveDate", "Move date", { type: "date", required: true });

  const setup =
    (variant === "new-hire"
      ? checks(
          "equipment",
          "Equipment requested",
          pairs(["Laptop", "Monitor", "Headset"]),
        ) +
        field("deliveryNotes", "Delivery instructions", {
          type: "textarea",
          hidden: true,
        })
      : "") +
    checks(
      "confirmation",
      "Confirmation",
      [["confirmed", "I confirm these details are correct."]],
      true,
    );

  const pages =
    stage >= 4
      ? [
          ["personal", "Personal details", personal],
          ["employment", "Employment details", employment],
          ["contactsPage", "Emergency contacts", contacts],
          ["relocation", "Relocation", relocation],
          [
            "setup",
            variant === "new-hire"
              ? "Workplace setup"
              : "Confirm profile update",
            setup,
          ],
        ]
      : [
          [
            "employee",
            stage === 1 ? "Employee contact" : "Employee details",
            personal +
              (stage >= 2 ? employment : "") +
              (stage >= 3 ? contacts : ""),
          ],
        ];

  root.innerHTML = `<form id="employee-form" novalidate>${pages.map(([name, title, body]) => `<section data-page="${name}" data-active="true" aria-labelledby="${name === "contactsPage" ? "contacts-title" : `title-${name}`}">${name === "contactsPage" ? "" : `<h3 id="title-${name}" tabindex="-1">${title}</h3>`}${body}</section>`).join("")}
    <p id="progress" class="visually-hidden" role="status"></p><div class="d-flex gap-2 mt-3"><button type="button" id="previous" class="btn btn-outline-primary" hidden>Previous</button><button type="button" id="next" class="btn btn-outline-primary" hidden>Next</button><button type="submit" id="complete" class="btn btn-primary">Complete</button></div><p id="contact-status" class="visually-hidden" role="status"></p></form>`;

  const form = root.querySelector("form");
  const allPages = [...form.querySelectorAll("[data-page]")];
  const activePages = () => allPages.filter((p) => p.dataset.active === "true");
  const get = (name) => form.elements.namedItem(name);
  const contactsRoot = form.querySelector("#contacts");
  const rows = () => (contactsRoot ? [...contactsRoot.children] : []);

  let current = allPages[0];
  let nextContactId = 0;

  function setField(scope, name, visible, required) {
    const wrapper = scope.querySelector(`[data-field="${name}"]`);
    if (!wrapper) return;

    wrapper.hidden = !visible;

    const control = wrapper.querySelector("input,select,textarea");
    control.disabled = !visible;
    control.required = visible && required;
    wrapper.querySelector("[data-required]").innerHTML = control.required
      ? mark
      : "";
  }

  function refreshPages(focus = false) {
    const active = activePages();
    if (!active.includes(current)) current = active[0];

    allPages.forEach((p) => (p.hidden = p !== current));
    const index = active.indexOf(current);
    form.querySelector("#previous").hidden = index === 0;
    form.querySelector("#next").hidden = index === active.length - 1;
    form.querySelector("#complete").hidden = index !== active.length - 1;
    form.querySelector("#progress").textContent =
      stage >= 4 ? `Step ${index + 1} of ${active.length}` : "";

    if (focus) current.querySelector("h3").focus();
  }

  function syncConditions() {
    if (stage >= 2) {
      setField(
        form,
        "contractEnd",
        get("contractType").value === "fixed",
        true,
      );
      setField(
        form,
        "officeLocation",
        officeWorker(get("workMode").value),
        true,
      );
      setField(form, "homeAddress", homeWorker(get("workMode").value), true);

      get("contractEnd").min = get("startDate").value;
      get("contractEnd").setCustomValidity(
        get("contractEnd").value &&
          get("startDate").value &&
          get("contractEnd").value < get("startDate").value
          ? "End date must be on or after start date."
          : "",
      );
    }

    for (const row of rows()) {
      const method = row.querySelector('[data-key="contactMethod"]').value;
      setField(row, `${row.id}-email`, method === "email", true);
      setField(
        row,
        `${row.id}-phone`,
        emergencyPhoneRequired(method, options),
        true,
      );
    }

    if (stage >= 4) {
      const relocating = get("relocates").value === "yes";
      const page = form.querySelector('[data-page="relocation"]');
      page.dataset.active = String(relocating);
      page.querySelectorAll("input").forEach((c) => (c.disabled = !relocating));

      if (variant === "new-hire")
        setField(
          form,
          "deliveryNotes",
          homeWorker(get("workMode").value),
          deliveryRequired(options),
        );
    }

    refreshPages();
  }

  function updateContactButtons() {
    if (!contactsRoot) return;

    form.querySelector("#add-contact").disabled = rows().length >= 3;
    rows().forEach((row, index) => {
      row.querySelector("h4").textContent = `Contact ${index + 1}`;
      row.classList.toggle("border-top", index > 0);
      row.querySelector("[data-remove]").hidden = rows().length === 1;
      row
        .querySelector("button")
        .setAttribute("aria-label", `Remove contact ${index + 1}`);
    });
  }

  function addContact(focus = true) {
    if (rows().length >= 3) return;

    const row = document.createElement("section");
    row.id = `contact-${nextContactId++}`;
    row.className = "contact";
    row.setAttribute("aria-labelledby", `${row.id}-title`);

    const local = (key, title, properties = {}) =>
      field(`${row.id}-${key}`, title, { ...properties, key });
    row.innerHTML =
      `<h4 id="${row.id}-title" class="fs-5 fw-medium px-3 pt-3 mb-2"></h4><div class="px-3">` +
      contactFields(local, options) +
      `</div><div data-remove class="px-3 pb-3"><button type="button" class="btn btn-sm btn-danger bg-danger bg-opacity-10 text-danger border-danger border-opacity-10 w-100">Remove contact</button></div>`;

    row.querySelector("button").onclick = () => {
      if (rows().length <= 1) return;

      const index = rows().indexOf(row);
      row.remove();
      updateContactButtons();
      rows()[Math.min(index, rows().length - 1)].querySelector("input").focus();
      form.querySelector("#contact-status").textContent = "Contact removed.";
    };

    contactsRoot.append(row);
    updateContactButtons();
    syncConditions();

    if (focus) {
      row.querySelector("input").focus();
      form.querySelector("#contact-status").textContent = "Contact added.";
    }
  }

  function showError(control, validate = false) {
    if (validate) control.dataset.validated = "true";

    const invalid =
      !control.disabled &&
      control.dataset.validated === "true" &&
      !control.checkValidity();
    control.classList.toggle("is-invalid", invalid);
    if (invalid) control.setAttribute("aria-invalid", "true");
    else control.removeAttribute("aria-invalid");

    const feedback = document.getElementById(`${control.id}-error`);
    if (feedback) {
      feedback.hidden = !invalid;
      feedback.textContent = invalid
        ? control.validity.valueMissing
          ? "This field is required."
          : control.validity.typeMismatch
            ? "Enter a valid email address."
            : control.validationMessage
        : "";
    }
  }

  function updateErrors() {
    form
      .querySelectorAll("input,select,textarea")
      .forEach((control) => showError(control));
  }

  function validatePage(page) {
    const controls = [...page.querySelectorAll("input,select,textarea")];
    controls.forEach((control) => showError(control, true));
    const invalid = controls.find((control) => !control.checkValidity());
    if (!invalid) return true;

    current = page;
    refreshPages();
    invalid.focus();

    return false;
  }

  form.addEventListener("change", () => {
    syncConditions();
    updateErrors();
  });

  form.addEventListener("input", () => {
    syncConditions();
    updateErrors();
  });

  form.querySelector("#previous").onclick = () => {
    current = activePages()[activePages().indexOf(current) - 1];
    refreshPages(true);
  };

  form.querySelector("#next").onclick = () => {
    syncConditions();
    if (validatePage(current)) {
      current = activePages()[activePages().indexOf(current) + 1];
      refreshPages(true);
    }
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    syncConditions();
    for (const page of activePages()) if (!validatePage(page)) return;

    const values = new FormData(form);
    const data = Object.fromEntries(values);
    data.contacts = rows().map((row) =>
      Object.fromEntries(
        [...row.querySelectorAll("[data-key]")]
          .filter((c) => !c.disabled)
          .map((c) => [c.dataset.key, c.value]),
      ),
    );
    data.equipment = values.getAll("equipment");
    data.confirmation = values.getAll("confirmation");

    preview(data, options);
  });

  if (stage >= 3) {
    form.querySelector("#add-contact").onclick = () => addContact();
  }

  function fill(data) {
    form.reset();
    form.querySelector("#contact-status").textContent = "";
    form
      .querySelectorAll("[data-validated]")
      .forEach((c) => delete c.dataset.validated);

    if (stage >= 3) {
      contactsRoot.replaceChildren();
      for (const contact of data.contacts ?? [{}]) addContact(false);
    }

    for (const [name, value] of Object.entries(data)) {
      if (name === "contacts") continue;
      const controls = [...form.querySelectorAll("[name]")].filter(
        (c) => c.name === name,
      );
      for (const control of controls) {
        if (control.type === "checkbox")
          control.checked =
            Array.isArray(value) && value.includes(control.value);
        else control.value = value;
      }
    }

    (data.contacts ?? []).forEach((contact, index) => {
      const row = rows()[index];
      if (!row) return;

      for (const [key, value] of Object.entries(contact)) {
        const control = row.querySelector(`[data-key="${key}"]`);
        if (control) control.value = value;
      }
    });

    current = allPages[0];
    syncConditions();
    updateErrors();
  }

  fill(initialData(options));

  return {
    fillSample() {
      fill(sampleData(options));
    },
  };
}
