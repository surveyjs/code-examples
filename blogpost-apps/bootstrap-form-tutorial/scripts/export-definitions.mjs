import { mkdirSync, writeFileSync } from "node:fs";
import { makeDefinition } from "../src/survey/definition.js";
import { definitionPath, normalizeOptions } from "../src/shared/scenario.js";

mkdirSync("public/definitions", { recursive: true });

for (let stage = 1; stage <= 5; stage++)
  for (const variant of stage === 5
    ? ["new-hire", "profile-update"]
    : ["new-hire"])
    for (const revision of stage === 5
      ? ["original", "revised"]
      : ["original"]) {
      const options = normalizeOptions({ stage, variant, revision });
      writeFileSync(
        `public${definitionPath(options)}`,
        JSON.stringify(makeDefinition(options), null, 2) + "\n",
      );
    }

console.log("Exported 8 standalone SurveyJS JSON definitions.");

await import("./maintenance-diff.mjs");
await import("./styling-audit.mjs");
