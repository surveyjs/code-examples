import "bootstrap/dist/css/bootstrap.min.css";
import "./shared/style.css";
import { normalizeOptions } from "./shared/scenario.js";

const params = new URLSearchParams(location.search);
const options = normalizeOptions(Object.fromEntries(params));
const engine = params.get("engine") === "survey" ? "survey" : "native";

document.documentElement.classList.add("embedded-document");
document.body.classList.add("embedded-comparison");

const send = (message) => {
  if (parent !== window) parent.postMessage(message, location.origin);
};

window.addEventListener("message", (event) => {
  if (
    event.origin === location.origin &&
    event.source === parent &&
    event.data?.type === "comparison-theme" &&
    ["light", "dark"].includes(event.data.mode)
  )
    document.documentElement.dataset.bsTheme = event.data.mode;
});

function invalidate() {
  document.querySelector("#output").hidden = true;
  document.querySelector("#result").textContent = "";
  document.querySelector("#status").textContent = "";
}

window.addEventListener("form-dirty", invalidate);
document.querySelector("#app").addEventListener("click", (event) => {
  if (
    /^(Add contact|Remove contact)/.test(
      event.target.closest("button")?.textContent.trim() ?? "",
    )
  )
    invalidate();
});
document.querySelector("#app").addEventListener("input", invalidate);
document.querySelector("#app").addEventListener("change", invalidate);

const formRoot = document.querySelector("#app");
formRoot.inert = true;

try {
  const { mount } = await (engine === "native"
    ? import("./native/form.js")
    : import("./survey/form.js"));
  const controller = await mount(formRoot, options);

  formRoot.inert = false;
  document.querySelector("#fill-sample").disabled = false;
  document.querySelector("#fill-sample").onclick = () => {
    controller.fillSample();
    invalidate();
    document.querySelector("#sample-status").textContent =
      "Sample data filled in all steps, including confirmation. Review the form, then Complete.";
  };
} catch (error) {
  formRoot.inert = false;
  document.querySelector("#app").textContent =
    `Example could not load: ${error.message}`;
  document.querySelector("#fill-sample").disabled = true;
}

const reportHeight = () => {
  const main = document.querySelector("main");
  send({
    type: "comparison-height",
    height:
      Math.ceil(
        Math.max(main.getBoundingClientRect().height, main.scrollHeight),
      ) + 24,
  });
};

new ResizeObserver(reportHeight).observe(document.querySelector("main"));
reportHeight();
window.addEventListener("load", reportHeight);
document.fonts?.ready.then(reportHeight);

send({ type: "comparison-ready" });
