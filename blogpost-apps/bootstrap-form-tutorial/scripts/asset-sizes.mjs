import { readFileSync } from "node:fs";
import { gzipSync, brotliCompressSync, constants } from "node:zlib";

const manifest = JSON.parse(readFileSync("dist/.vite/manifest.json"));

function filesFor(key, files = new Set()) {
  const item = manifest[key];
  files.add(item.file);

  for (const css of item.css ?? []) files.add(css);
  for (const dependency of item.imports ?? []) filesFor(dependency, files);

  return files;
}

const results = {};
for (const mode of ["native", "survey_adapter", "survey_aligned"]) {
  const files = filesFor("embed.html");
  filesFor(`src/${mode === "native" ? "native" : "survey"}/form.js`, files);
  if (mode === "survey_aligned") filesFor("src/survey/layout.css", files);

  results[mode] = { files: [...files], raw: 0, gzip: 0, brotli: 0 };

  for (const file of files) {
    const bytes = readFileSync(`dist/${file}`);
    results[mode].raw += bytes.length;
    results[mode].gzip += gzipSync(bytes, { level: 9 }).length;
    results[mode].brotli += brotliCompressSync(bytes, {
      params: { [constants.BROTLI_PARAM_QUALITY]: 11 },
    }).length;
  }
}

const report =
  JSON.stringify(
    {
      unit: "bytes",
      scope:
        "JS/CSS dependency closure per embedded renderer, including shared styles and embed integration. Excludes HTML, definition JSON and network/cache effects. gzip level 9; Brotli quality 11, applied per file. Not a runtime benchmark.",
      results,
    },
    null,
    2,
  ) + "\n";

const { writeFileSync } = await import("node:fs");
writeFileSync("public/asset-sizes.json", report);
writeFileSync("dist/asset-sizes.json", report);
writeFileSync("docs/asset-sizes.json", report);

console.log(report);
