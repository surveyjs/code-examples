import { writeFileSync } from "node:fs";
import { contactFields } from "../src/native/contact-fields.js";
import {
  emergencyPhoneRequired,
  deliveryRequired,
} from "../src/native/rules.js";
import { makeDefinition } from "../src/survey/definition.js";

function diff(before, after, path = "$", changes = []) {
  if (JSON.stringify(before) === JSON.stringify(after)) return changes;

  if (
    before &&
    after &&
    typeof before === "object" &&
    typeof after === "object"
  ) {
    for (const key of new Set([...Object.keys(before), ...Object.keys(after)]))
      diff(before[key], after[key], `${path}.${key}`, changes);
  } else changes.push({ path, before: before ?? null, after: after ?? null });

  return changes;
}

const result = {
  note: "Generated from original and revised stage-5 definitions; paths are JSON object paths, not development effort metrics.",
  workflows: {},
};
for (const variant of ["new-hire", "profile-update"])
  result.workflows[variant] = diff(
    makeDefinition({ stage: 5, variant, revision: "original" }),
    makeDefinition({ stage: 5, variant, revision: "revised" }),
  );

const local = (key, title, properties = {}) =>
  `local(${JSON.stringify(key)}, ${JSON.stringify(title)}, ${JSON.stringify(properties)})\n`;

result.native = {
  note: "Generated from the actual runtime policy branches and contactFields() factory. Both revisions coexist; this is a semantic before/after list, not a historical git patch.",
  workflows: {},
};

for (const variant of ["new-hire", "profile-update"]) {
  const original = { stage: 5, variant, revision: "original" },
    revised = { ...original, revision: "revised" };
  const beforeFields = contactFields(local, original).trim().split("\n"),
    afterFields = contactFields(local, revised).trim().split("\n");

  result.native.workflows[variant] = [
    {
      file: "src/native/rules.js",
      change: "Phone visibility/required policy, reused by both workflows",
      before: `emergencyPhoneRequired("email", original): ${emergencyPhoneRequired("email", original)}; emergencyPhoneRequired("phone", original): ${emergencyPhoneRequired("phone", original)}`,
      after: `emergencyPhoneRequired("email", revised): ${emergencyPhoneRequired("email", revised)}; emergencyPhoneRequired("phone", revised): ${emergencyPhoneRequired("phone", revised)}\nActual helper: ${emergencyPhoneRequired.toString()}`,
    },
    {
      file: "src/native/contact-fields.js",
      change:
        "One shared factory: show phone unconditionally and append optional notes (unchanged fields omitted)",
      before: beforeFields
        .filter((line) => !afterFields.includes(line))
        .join("\n"),
      after: afterFields
        .filter((line) => !beforeFields.includes(line))
        .join("\n"),
    },
  ];

  if (variant === "new-hire")
    result.native.workflows[variant].push({
      file: "src/native/rules.js",
      change: "Delivery required for visible remote/hybrid new-hire field only",
      before: `deliveryRequired(original): ${deliveryRequired(original)}`,
      after: `deliveryRequired(revised): ${deliveryRequired(revised)}\nActual helper: ${deliveryRequired.toString()}`,
    });
}

writeFileSync(
  "public/maintenance-diff.json",
  JSON.stringify(result, null, 2) + "\n",
);
