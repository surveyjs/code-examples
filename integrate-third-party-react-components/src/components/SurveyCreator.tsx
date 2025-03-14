'use client'

import { useState } from "react";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import { Serializer } from "survey-core";
import { registerColorPicker } from "./ColorPicker";
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.css";
import { ActiveTabChangedEvent, SurveyCreatorModel } from "survey-creator-core";

registerColorPicker();
addBackgroundColorProperty();

const surveyJson = {
  elements: [{
    type: "color-picker",
    name: "question1",
    title: "Pick a color",
    colorPickerType: "Sketch"
  }]
};

export default function SurveyCreatorWidget () {
  let [creator, setCreator] = useState<SurveyCreator>();

  if (!creator) {
    creator = new SurveyCreator();
    setCreator(creator);
  }
  creator.onActiveTabChanged.add(handleActiveTabChange);
  creator.JSON = surveyJson;
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <SurveyCreatorComponent creator={creator} />
    </div>
  )
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

function applyBackground(color: string) {
  setTimeout(() => {
    const surveyEl = document.getElementsByClassName("sd-root-modern")[0] as HTMLElement;
    if (!!surveyEl) {
      surveyEl.style.setProperty("--background", color);
    }
  }, 50);
}

function handleActiveTabChange(sender: SurveyCreatorModel, options: ActiveTabChangedEvent) {
  if (options.tabName === "preview" || options.tabName === "designer") {
    applyBackground(sender.survey.backgroundColor);
  }
}
