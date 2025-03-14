<script setup lang="ts">
import 'survey-core/survey-core.min.css';
import "survey-creator-core/survey-creator-core.min.css";

import { Serializer } from "survey-core";
import { SurveyCreatorModel } from "survey-creator-core";
import type { SurveyModel } from "survey-core";
import type { CreatorBase } from "survey-creator-core";
import { SurveyCreatorComponent } from "survey-creator-vue";

Serializer.addProperty("survey", {
  name: "backgroundColor",
  displayName: "Background color",
  type: "color",
  category: "general",
  visibleIndex: 3,
  onSetValue: (survey: SurveyModel, value: string) => {
    survey.setPropertyValue("backgroundColor", value);
    applyBackground(value);
  }
});

const surveyJson = {
  elements: [{
    type: "color-picker",
    name: "question1",
    title: "Pick a color",
    colorPickerType: "Sketch"
  }]
};

function applyBackground(color: string) {
  setTimeout(() => {
    const surveyEl = document.getElementsByClassName("sd-root-modern")[0] as HTMLElement;
    if (surveyEl) {
      surveyEl.style.setProperty("--background", color);
    }
  }, 50);
}

function handleActiveTabChange(sender: CreatorBase, { tabName }: { tabName: string }) {
  if (tabName === "preview" || tabName === "designer") {
    applyBackground(sender.survey.backgroundColor);
  }
}

const creator = new SurveyCreatorModel({});
creator.onActiveTabChanged.add(handleActiveTabChange);
creator.JSON = surveyJson;
</script>

<template>
  <SurveyCreatorComponent :model="creator" />
</template>