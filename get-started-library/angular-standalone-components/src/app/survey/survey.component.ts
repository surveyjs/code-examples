import { Component, Input, OnInit } from '@angular/core';
import { Model } from "survey-core";
import { SurveyModule } from 'survey-angular-ui';
import "survey-core/survey-core.css";

// const SURVEY_ID = 1;

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [ SurveyModule ],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})
export class SurveyComponent implements OnInit {
  title = 'My First Survey';
  @Input() surveyJson!: object;
  surveyModel!: Model;
  alertResults (sender: Model) {
    const results = JSON.stringify(sender.data);
    alert(results);
    // saveSurveyResults(
    //   "https://your-web-service.com/" + SURVEY_ID,
    //   sender.data
    // )
  }
  ngOnInit() {
    const survey = new Model(this.surveyJson);
    survey.onComplete.add(this.alertResults);
    this.surveyModel = survey;
  }
}

// function saveSurveyResults(url: string | URL, json: object) {
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     body: JSON.stringify(json)
//   })
//   .then(response => {
//     if (response.ok) {
//       // Handle success
//     } else {
//       // Handle error
//     }
//   })
//   .catch(error => {
//     // Handle error
//   });
// }