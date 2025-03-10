import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Serializer } from "survey-core";
import { SurveyCreatorModel } from "survey-creator-core";
import { getSurveyJSON, getSurveyName, saveSurveyJSON, saveSurveyName } from "../WebDataService";

Serializer.findProperty("survey", "title").isRequired = true;

@Component({
  templateUrl: "./creator-widget.component.html",
  selector: "creator-widget"
})
export class CreatorWidgetComponent implements OnInit {
  creator!: SurveyCreatorModel;
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit() {
    const id: number = Number.parseInt(this.route.snapshot.queryParams["id"]);
    this.creator = new SurveyCreatorModel()
    this.creator.autoSaveEnabled = true;
    this.creator.saveSurveyFunc = (saveNo: number, callback: (saveNo: number, arg: boolean) => void) => {
      // You can use `this.creator.text` as an alternative to `this.creator.JSON`
      saveSurveyJSON(id, this.creator.JSON, () => {
        callback(saveNo, true);
      });
    };
    this.creator.onModified.add((_, options) => {
      // We are interested in property changes only
      if (options.type === "PROPERTY_CHANGED") {
        // Update the survey name in the database when the survey title is changed
        if (
          options.name === "title" &&
          !!options.target &&
          options.target.getType() === "survey"
        ) {
          saveSurveyName(id, options.newValue);
        }
      }
    });
    getSurveyJSON(id, (json: any) => {
      // Save the survey title to prevent it from being overwritten
      const prevTitle = this.creator.survey.title;
      // You can use `this.creator.text` as an alternative to `this.creator.JSON`
      this.creator.JSON = json;
      if (!!prevTitle) {
        this.creator.survey.title = prevTitle;
      }
    });
    getSurveyName(id, (name: string) => {
      this.creator.survey.title = name;
    });
  }
} 