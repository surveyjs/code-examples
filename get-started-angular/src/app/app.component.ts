import { Component, OnInit } from '@angular/core';
import { Model, SurveyNG, StylesManager } from "survey-angular";

const surveyJson = {
  questions: [{
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My First Survey';
  alertResults (sender) {
    const results = JSON.stringify(sender.data);
    alert(results);
  }
  ngOnInit() {
    StylesManager.applyTheme("modern");
    
    const survey = new Model(surveyJson);
    survey.onComplete.add(this.alertResults);
    SurveyNG.render("surveyContainer", { model: survey });
  }
}
