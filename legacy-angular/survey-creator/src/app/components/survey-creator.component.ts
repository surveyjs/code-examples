import { AfterViewInit, Component } from "@angular/core";
import { SurveyCreator } from "survey-creator-knockout";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

const defaultJson = {
  pages: [{
    name: "Name",
    elements: [{
      name: "FirstName",
      title: "Enter your first name:",
      type: "text"
    }, {
      name: "LastName",
      title: "Enter your last name:",
      type: "text"
    }]
  }]
};

@Component({ 
  selector: "survey-creator",
  templateUrl: "./survey-creator.component.html",
  styleUrls: [ "./survey-creator.component.css" ]
})
export class SurveyCreatorComponent implements AfterViewInit  {
  ngAfterViewInit(): void {
    const creator = new SurveyCreator(creatorOptions);
    creator.render("surveyCreator");
    creator.saveSurveyFunc = (saveNo: number, callback: Function) => { 
      window.localStorage.setItem("survey-json", creator.text);
      callback(saveNo, true);
    };
    creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
  }
}