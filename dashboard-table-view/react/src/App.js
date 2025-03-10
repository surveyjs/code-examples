import './App.css'

import { useState, useEffect } from 'react';
import 'tabulator-tables/dist/css/tabulator.min.css';
import 'survey-analytics/survey.analytics.tabulator.min.css';
import { Model } from 'survey-core';
import { Tabulator } from 'survey-analytics/survey.analytics.tabulator';

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

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function generateData() {
  const data = [];
  for (let index = 0; index < 100; index++) {
    const satisfactionScore = randomIntFromInterval(1, 5);
    const npsScore = satisfactionScore > 3 ? randomIntFromInterval(7, 10) : randomIntFromInterval(1, 6);
    data.push({
      "satisfaction-score": satisfactionScore,
      "nps-score": npsScore
    });
  }
  return data;
}

export default function App() {
  const [survey, setSurvey] = useState(null);
  const [surveyDataTable, setSurveyDataTable] = useState(null);
  const [surveyResults, setSurveyResults] = useState(null);
  if (!survey) {
    const survey = new Model(surveyJson);
    setSurvey(survey);
  }
  if (!surveyResults) {
    setSurveyResults(generateData());
  }

  if (!surveyDataTable && !!survey) {
    const surveyDataTable = new Tabulator(
      survey,
      surveyResults
    );
    setSurveyDataTable(surveyDataTable);
  }

  useEffect(() => {
    surveyDataTable.render("surveyDataTable");
    return () => {
      document.getElementById("surveyDataTable").innerHTML = "";
    }
  }, [surveyDataTable]);

  return (
    <div id="surveyDataTable" />
  );
}
