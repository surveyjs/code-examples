<script setup lang="ts">
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';

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

const alertResults = (sender: any) => {
  const results = JSON.stringify(sender.data);
  alert(results);
  // saveSurveyResults(
  //   "https://your-web-service.com/" + SURVEY_ID,
  //   sender.data
  // )
}


const survey = new Model(surveyJson);
survey.onComplete.add(alertResults);

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
</script>

<template>
  <SurveyComponent :model="survey" />
</template>