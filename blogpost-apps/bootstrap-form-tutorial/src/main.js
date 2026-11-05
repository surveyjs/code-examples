import "bootstrap/dist/css/bootstrap.min.css";
import "./shared/style.css";
import { normalizeOptions, stages } from "./shared/scenario.js";

const config = normalizeOptions(
  Object.fromEntries(new URLSearchParams(location.search)),
);
const { stage } = config;

const controls = document.querySelector("#options");
for (const key of ["stage", "variant", "revision", "styling"])
  controls.elements[key].value = config[key];

function updateControls() {
  controls.elements.variant.disabled = controls.elements.stage.value !== "5";
  controls.elements.revision.disabled = controls.elements.stage.value !== "5";
}

controls.elements.stage.addEventListener("change", updateControls);
updateControls();

controls.addEventListener("submit", (event) => {
  event.preventDefault();
  location.search = new URLSearchParams(
    normalizeOptions(Object.fromEntries(new FormData(controls))),
  );
});

function applyColorMode(mode) {
  document.documentElement.dataset.bsTheme = mode;
  document
    .querySelectorAll("iframe")
    .forEach((frame) =>
      frame.contentWindow?.postMessage(
        { type: "comparison-theme", mode },
        location.origin,
      ),
    );
}

document.querySelector("#theme").onclick = () =>
  applyColorMode(
    document.documentElement.dataset.bsTheme === "dark" ? "light" : "dark",
  );

document.querySelector("main").classList.add("comparison-wide");
document.querySelector("#stage-title").textContent = stages[stage - 1].title;
document.querySelector("#stage-change").textContent = stages[stage - 1].change;
document.querySelector("#stage-verdict").textContent =
  stages[stage - 1].verdict;

const grid = document.querySelector("#app");
grid.className = "comparison-grid";

for (const [value, title] of [
  ["native", "Native Bootstrap"],
  ["survey", "SurveyJS"],
]) {
  const column = document.createElement("section");
  const heading = document.createElement("h3");
  heading.textContent = title;

  const frame = document.createElement("iframe");
  frame.title = `${title} form and response data`;
  frame.dataset.engine = value;
  frame.setAttribute("scrolling", "no");
  frame.src = `embed.html?${new URLSearchParams({ ...config, engine: value })}`;
  frame.addEventListener("load", () => {
    applyColorMode(document.documentElement.dataset.bsTheme || "light");
  });

  column.append(heading, frame);
  grid.append(column);
}

window.addEventListener("message", (event) => {
  if (event.origin !== location.origin) return;

  const frame = [...grid.querySelectorAll("iframe")].find(
    (f) => f.contentWindow === event.source,
  );
  if (!frame) return;

  if (event.data?.type === "comparison-ready")
    applyColorMode(document.documentElement.dataset.bsTheme || "light");

  if (
    event.data?.type === "comparison-height" &&
    Number.isFinite(event.data.height)
  )
    frame.style.height = `${Math.max(500, Math.min(30000, event.data.height))}px`;
});
