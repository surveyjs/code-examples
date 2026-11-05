import { Model, setupThemeAdapter } from "survey-core";
import "survey-js-ui";
import "survey-core/survey-core.css";
import "survey-core/themes/adapters/bootstrap-default.css";

import { definitionPath } from "../shared/scenario.js";
import { initialData, sampleData } from "../shared/sample-data.js";
import { preview } from "../shared/contract.js";

setupThemeAdapter("bootstrap"); // Before model creation. Does not remove application layout work.

export async function mount(root, options) {
  if (options.styling === "aligned") {
    await import("./layout.css");
    root.classList.add("comparison-survey");
  }

  const response = await fetch(definitionPath(options));
  if (!response.ok) throw new Error("Could not load form definition.");

  const survey = new Model(await response.json());
  survey.data = initialData(options);

  survey.onValueChanged.add(() => {
    if (survey.isCompleted) survey.clear(false, false);
    window.dispatchEvent(new Event("form-dirty"));
  });

  // Demo-only: preserve answers and keep the form editable for repeated comparisons.
  survey.onComplete.add((sender) => {
    preview(sender.data, options);
    sender.clear(false, false);
  });

  const rendered = new Promise((resolve) =>
    survey.onAfterRenderSurvey.add(resolve),
  );
  survey.render(root);
  await rendered;

  survey.forceProcessResponsiveness();
  await new Promise((resolve) => requestAnimationFrame(resolve));

  return {
    fillSample() {
      survey.clear();
      survey.data = sampleData(options);
      survey.currentPageNo = 0;
      survey.getAllQuestions().forEach((question) => question.clearErrors());
    },
  };
}
