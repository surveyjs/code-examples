import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Model } from "survey-core";

// const SURVEY_ID = 1;

const surveyJson = {
  elements: [{
    name: "FirstName",
    title: "Enter your first name:",
    type: "text"
  }, {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  }]
};

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My First Survey';
  surveyModel: Model;
  alertResults (sender) {
    const results = JSON.stringify(sender.data);
    alert(results);
    // saveSurveyResults(
    //   "https://your-web-service.com/" + SURVEY_ID,
    //   sender.data
    // )
  }
  ngOnInit() {    
    const survey = new Model(surveyJson);
    survey.onComplete.add(this.alertResults);
    this.surveyModel = survey;
  }
}

// function saveSurveyResults(url, json) {
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