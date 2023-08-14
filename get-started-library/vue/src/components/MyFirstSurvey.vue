<template>
  <Survey :survey="survey" />
</template>

<script>
  // Default V2 theme
import 'survey-core/defaultV2.min.css';
// Modern theme
// import 'survey-core/modern.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-vue-ui';

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

export default {
  name: 'MyFirstSurvey',
  components: {
    Survey
  },
  data() {
    const survey = new Model(surveyJson);
    survey.onComplete.add(this.alertResults);

    return {
      survey
    }
  },
  methods: {
    alertResults (sender) {
      const results = JSON.stringify(sender.data);
      alert(results);
      // saveSurveyResults(
      //   "https://your-web-service.com/" + SURVEY_ID,
      //   sender.data
      // )
    }
  },
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
</script>
