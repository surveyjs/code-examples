import { AfterViewInit, Component } from '@angular/core';
import { Model } from 'survey-core';
import { Dashboard } from 'survey-analytics';

const surveyJson = {
  elements: [{
    name: "satisfaction-score",
    title: "How would you describe your experience with our product?",
    type: "radiogroup",
    choices: [
      { value: 5, text: "Fully satisfying" },
      { value: 4, text: "Generally satisfying" },
      { value: 3, text: "Neutral" },
      { value: 2, text: "Rather unsatisfying" },
      { value: 1, text: "Not satisfying at all" }
    ],
    isRequired: true
  }, {
    name: "nps-score",
    title: "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
    type: "rating",
    rateMin: 0,
    rateMax: 10,
  }],
  completedHtml: "Thank you for your feedback!",
};

function randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateData() {
  const data = [];
  for (let index = 0; index < 100; index++) {
    const satisfactionScore = randomIntFromInterval(index % 3 ? 1 : 3, 5);
    const npsScore = satisfactionScore > 3 ? randomIntFromInterval(7, 10) : randomIntFromInterval(0, 6);
    data.push({
      "satisfaction-score": satisfactionScore,
      "nps-score": npsScore
    });
  }
  return data;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const survey = new Model(surveyJson);
    const dashboard = new Dashboard({
      questions: survey.getAllQuestions(),
      data: generateData(),
      allowHideQuestions: false
    });
    dashboard.render("surveyDashboard");
  }
}
