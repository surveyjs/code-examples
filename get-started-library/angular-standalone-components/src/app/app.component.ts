import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SurveyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Get Started with SurveyJS Form Library for Angular';
  surveyJson = {
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
}
