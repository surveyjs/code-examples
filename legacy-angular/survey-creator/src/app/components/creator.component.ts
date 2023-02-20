import { AfterViewInit, Component } from "@angular/core";
import { SurveyCreator } from "survey-creator-knockout";

@Component(
  { 
    selector: "survey-creator",
    templateUrl: "./creator.component.html"
  }
)
export class CreatorComponent implements AfterViewInit  {
  ngAfterViewInit(): void {
    const creatorOptions = { showLogicTab: true };
    const creator = new SurveyCreator(creatorOptions);
    creator.render("creatorElement");
  }
}