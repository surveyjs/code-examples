import { normalizeOptions } from "../shared/scenario.js";

export function makeDefinition(input) {
  const { stage, variant, revision } = normalizeOptions(input);
  const revised = stage === 5 && revision === "revised";

  const text = (name, title, properties = {}) => ({
    type: "text",
    name,
    title,
    ...properties,
  });

  const select = (name, title, choices, properties = {}) => ({
    type: "dropdown",
    renderAs: "select",
    name,
    title,
    choices,
    isRequired: true,
    ...properties,
  });

  const personal = [
    text("name", "Full name", { isRequired: true, autocomplete: "name" }),
    text("email", "Email", {
      inputType: "email",
      isRequired: true,
      autocomplete: "email",
    }),
    select("department", "Department", ["Engineering", "Operations", "Sales"]),
  ];

  const home = "{workMode} = 'remote' or {workMode} = 'hybrid'";
  const employment = [
    select("workMode", "Work mode", [
      { value: "office", text: "Office" },
      { value: "remote", text: "Remote" },
      { value: "hybrid", text: "Hybrid" },
    ]),
    select("contractType", "Contract type", [
      { value: "permanent", text: "Permanent" },
      { value: "fixed", text: "Fixed term" },
    ]),
    text("startDate", "Start date", { inputType: "date", isRequired: true }),
    text("contractEnd", "Contract end date", {
      inputType: "date",
      visibleIf: "{contractType} = 'fixed'",
      isRequired: true,
      validators: [
        {
          type: "expression",
          expression: "{contractEnd} >= {startDate}",
          text: "End date must be on or after start date.",
        },
      ],
    }),
    select(
      "officeLocation",
      "Office location",
      ["London", "Berlin", "Yerevan"],
      { visibleIf: "{workMode} = 'office' or {workMode} = 'hybrid'" },
    ),
    {
      type: "comment",
      rows: 3,
      name: "homeAddress",
      title: "Home working address",
      isRequired: true,
      visibleIf: home,
    },
  ];
  if (stage >= 4)
    employment.push(
      select("relocates", "Are you relocating?", [
        { value: "no", text: "No" },
        { value: "yes", text: "Yes" },
      ]),
    );

  const contactFields = [
    text("name", "Contact name", { isRequired: true }),
    select("relationship", "Relationship", ["Family", "Partner", "Friend"]),
    select("contactMethod", "Preferred contact method", [
      { value: "email", text: "Email" },
      { value: "phone", text: "Phone" },
    ]),
    text("email", "Contact email", {
      inputType: "email",
      isRequired: true,
      visibleIf: "{panel.contactMethod} = 'email'",
    }),
    text("phone", "Contact phone", {
      inputType: "tel",
      isRequired: true,
      ...(revised ? {} : { visibleIf: "{panel.contactMethod} = 'phone'" }),
    }),
  ];
  if (revised) contactFields.push(text("notes", "Contact notes"));

  const contacts = {
    type: "paneldynamic",
    name: "contacts",
    title: "Emergency contacts",
    description: "Include 1 to 3 emergency contacts.",
    descriptionLocation: "underTitle",
    templateTitle: "Contact {panelIndex}",
    panelCount: 1,
    minPanelCount: 1,
    maxPanelCount: 3,
    addPanelText: "Add contact",
    removePanelText: "Remove contact",
    templateElements: contactFields,
  };

  const setup = [];
  if (variant === "new-hire")
    setup.push(
      {
        type: "checkbox",
        name: "equipment",
        title: "Equipment requested",
        choices: ["Laptop", "Monitor", "Headset"],
      },
      {
        type: "comment",
        rows: 3,
        name: "deliveryNotes",
        title: "Delivery instructions",
        visibleIf: home,
        isRequired: revised,
      },
    );
  setup.push({
    type: "checkbox",
    name: "confirmation",
    title: "Confirmation",
    isRequired: true,
    choices: [
      { value: "confirmed", text: "I confirm these details are correct." },
    ],
  });

  const definition = {
    widthMode: "responsive",
    showQuestionNumbers: "off",
    clearInvisibleValues: "none",
    completeText: "Complete",
    showCompletedPage: false,
  };
  definition.pages =
    stage >= 4
      ? [
          { name: "personal", title: "Personal details", elements: personal },
          {
            name: "employment",
            title: "Employment details",
            elements: employment,
          },
          { name: "contactsPage", elements: [contacts] },
          {
            name: "relocation",
            title: "Relocation",
            visibleIf: "{relocates} = 'yes'",
            elements: [
              text("relocationCity", "Destination city", { isRequired: true }),
              text("moveDate", "Move date", {
                inputType: "date",
                isRequired: true,
              }),
            ],
          },
          {
            name: "setup",
            title:
              variant === "new-hire"
                ? "Workplace setup"
                : "Confirm profile update",
            elements: setup,
          },
        ]
      : [
          {
            name: "employee",
            title: stage === 1 ? "Employee contact" : "Employee details",
            elements: [
              ...personal,
              ...(stage >= 2 ? employment : []),
              ...(stage >= 3 ? [contacts] : []),
            ],
          },
        ];

  return definition;
}
