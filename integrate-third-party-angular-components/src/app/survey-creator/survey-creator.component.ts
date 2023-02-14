import { Component, OnInit } from "@angular/core";
import { SurveyCreatorModel } from "survey-creator-core";
import { Serializer, SurveyModel } from "survey-core";

function applyBackground(color) {
  setTimeout(() => {
    const surveyEl = document.getElementsByClassName("sd-root-modern")[0] as HTMLElement;
    if (!!surveyEl) {
      surveyEl.style.setProperty("--background", color);
    }
  }, 50);
};

function handleActiveTabChange(sender, options) {
  if (options.tabName === "test" || options.tabName === "designer") {
    applyBackground(sender.survey.backgroundColor);
  }
};

const creatorOptions = {
  showLogicTab: true
};

const surveyJson = {
  elements: [{
    type: "color-picker",
    name: "question1",
    title: "Pick a color",
    colorPickerType: "Sketch"
  }]
};

@Component({
  selector: "survey-creator-component",
  templateUrl: "./survey-creator.component.html",
  styleUrls: ["./survey-creator.component.css"]
})
export class SurveyCreatorComponent implements OnInit {
  surveyCreatorModel!: SurveyCreatorModel;
  ngOnInit() {
    const creator = new SurveyCreatorModel(creatorOptions);
      
    Serializer.addProperty("survey", {
      name: "backgroundColor",
      displayName: "Background color",
      type: "color",
      category: "general",
      visibleIndex: 3,
      onSetValue: (survey: SurveyModel, value) => {
        survey.setPropertyValue("backgroundColor", value);
        applyBackground(value);
      }
    });
      
    creator.onActiveTabChanged.add(handleActiveTabChange);
    creator.JSON = surveyJson;
      
    this.surveyCreatorModel = creator;
  }
}