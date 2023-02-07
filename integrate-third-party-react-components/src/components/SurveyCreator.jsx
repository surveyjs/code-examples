import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import { Serializer } from "survey-core";
import { registerColorPicker } from "./ColorPicker";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

registerColorPicker();
addBackgroundColorProperty();

export function SurveyCreatorWidget () {
  const creator = new SurveyCreator();
  creator.onActiveTabChanged.add(handleActiveTabChange);
  return <SurveyCreatorComponent creator={creator} />;
}

function addBackgroundColorProperty() {
  Serializer.addProperty("survey", {
    name: "backgroundColor",
    displayName: "Background color",
    type: "color",
    category: "general",
    visibleIndex: 3,
    onSetValue: (survey, value) => {
      survey.setPropertyValue("backgroundColor", value);
      applyBackground(value);
    }
  });
}

function applyBackground(color) {
  setTimeout(() => {
    const surveyEl = document.getElementsByClassName("sd-root-modern")[0];
    if (!!surveyEl) {
      surveyEl.style.setProperty("--background", color);
    }
  }, 50);
}

function handleActiveTabChange(sender, options) {
  if (options.tabName === "test" || options.tabName === "designer") {
    applyBackground(sender.survey.backgroundColor);
  }
}
