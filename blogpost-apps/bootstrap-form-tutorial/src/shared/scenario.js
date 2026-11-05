export const stages = [
  {
    title: "1 — Employee contact",
    change: "Three required fields: name, email, department.",
    verdict: "Native HTML and Bootstrap are sufficient here.",
  },
  {
    title: "2 — Conditional employment details",
    change:
      "Add work mode, contract type, dates, office or home address, and a cross-field date rule.",
    verdict:
      "A few named functions remain reasonable; a form engine is optional.",
  },
  {
    title: "3 — Repeatable emergency contacts",
    change:
      "Add 1–3 contacts. Each has a relationship, preferred contact method, and conditional email or phone.",
    verdict:
      "The application now owns repeated identity, per-row rules, add/remove behavior, and nested data.",
  },
  {
    title: "4 — Full onboarding workflow",
    change:
      "Split into personal, employment, contacts, conditional relocation, and workplace setup pages.",
    verdict:
      "An engine can replace reusable navigation and validation infrastructure; backend work remains yours.",
  },
  {
    title: "5 — Reuse and change exercise",
    change:
      "Reuse the workflow for new hires and a prefilled profile update. Compare original/revised policy: phone for every emergency contact, a new contact note, and required remote-delivery instructions for new hires.",
    verdict:
      "Inspect which shared rules change, which screen-specific rules remain, and what both implementations must test.",
  },
];

export function normalizeOptions(input = {}) {
  const stage = Math.min(5, Math.max(1, Math.trunc(Number(input.stage)) || 1));

  return {
    stage,
    variant:
      stage === 5 && input.variant === "profile-update"
        ? "profile-update"
        : "new-hire",
    revision:
      stage === 5 && input.revision === "revised" ? "revised" : "original",
    styling: input.styling === "aligned" ? "aligned" : "adapter",
  };
}

export function definitionPath(options) {
  const o = normalizeOptions(options);

  return `/definitions/stage-${o.stage}-${o.variant}-${o.revision}.json`;
}
