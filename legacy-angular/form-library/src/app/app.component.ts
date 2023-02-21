import { AfterViewInit, Component } from '@angular/core';
import { SurveyNG, Model } from "survey-angular";
const json = require("../assets/survey.json");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    SurveyNG.render("surveyElement", {
      model: new Model(json)
    })
  }
}
