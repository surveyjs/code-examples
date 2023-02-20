import { AfterViewInit, Component } from "@angular/core";
import { Survey } from "survey-knockout-ui";
const json = require("../../assets/survey.json");

@Component(
  { 
    selector: "survey-creator",
    templateUrl: "./creator.component.html"
  }
)
export class SurveyComponent implements AfterViewInit  {
  ngAfterViewInit(): void {
    const creator = new Survey(json);
    creator.render("creatorElement");
  }
}