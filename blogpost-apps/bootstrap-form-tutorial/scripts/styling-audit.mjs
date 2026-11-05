import { readFileSync, writeFileSync } from "node:fs";

const css = readFileSync("src/survey/layout.css", "utf8");

const result = {
  surveyCore: "3.2.3",
  bootstrap: "5.3.8",
  file: "src/survey/layout.css",
  nonemptyLines: css.split("\n").filter((line) => line.trim()).length,
  customPropertyDeclarations: (css.match(/--[\w-]+\s*:/g) || []).length,
  properties: [...css.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)].map((m) => ({
    name: m[1],
    value: m[2],
  })),
  selectorRules: [
    ".comparison-survey .sjs-theme-overrides (layout tokens)",
    ".comparison-survey .sd-root-modern--mobile ... (compact navigation)",
    "@media max-width 1199.98px (Bootstrap-like responsive page heading)",
    ".comparison-survey .sd-paneldynamic__add-btn (Bootstrap outline Add button)",
  ],
  disclosure:
    "Adapter-only mode does not import this file. Shared shell CSS and explicit widthMode/renderAs settings still apply. Line count describes actual added styling, not productivity.",
};

writeFileSync(
  "public/styling-audit.json",
  JSON.stringify(result, null, 2) + "\n",
);
