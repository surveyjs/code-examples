'use client'

import { useCallback } from 'react';
import 'survey-core/survey-core.css';
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'

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

export default function SurveyComponent() {
  const survey = new Model(surveyJson);
  const alertResults = useCallback((sender: Model) => {
    const results = JSON.stringify(sender.data);
    alert(results);
    // saveSurveyResults(
    //   "https://your-web-service.com/" + SURVEY_ID,
    //   sender.data
    // )
  }, []);

  survey.onComplete.add(alertResults);

  return (
    <Survey model={survey} />
  );
}

// function saveSurveyResults(url: string, json: object) {
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