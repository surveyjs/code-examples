<script setup lang="ts">
import 'survey-core/survey-core.min.css';
import { Model } from 'survey-core';
import { SurveyComponent } from "survey-vue3-ui";
import { ref } from 'vue'; 

const surveyJson = {
  pages: [{
    elements: [{
      type: "html",
      html: "<h4>In this survey, we will ask you a couple questions about your impressions of our product.</h4>"
    }]
  }, {
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
    }]
  }, {
    elements: [{
      name: "what-would-make-you-more-satisfied",
      title: "What can we do to make your experience more satisfying?",
      type: "comment",
      visibleIf: "{satisfaction-score} = 4"
    }, {
      name: "nps-score",
      title: "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
      type: "rating",
      rateMin: 0,
      rateMax: 10,
    }],
    visibleIf: "{satisfaction-score} >= 4"
  }, {
    elements: [{
      name: "how-can-we-improve",
      title: "In your opinion, how could we improve our product?",
      type: "comment"
    }],
    visibleIf: "{satisfaction-score} = 3"
  }, {
    elements: [{
      name: "disappointing-experience",
      title: "Please let us know why you had such a disappointing experience with our product",
      type: "comment"
    }],
    visibleIf: "{satisfaction-score} =< 2"
  }],
  showQuestionNumbers: "off",
  pageNextText: "Forward",
  completeText: "Submit",
  showPrevButton: false,
  firstPageIsStarted: true,
  startSurveyText: "Take the Survey",
  completedHtml: "Thank you for your feedback!",
  showPreviewBeforeComplete: "showAnsweredQuestions"
};

const survey = new Model(surveyJson);

const isSurveyCompleted = ref<boolean>(false);
const surveyResults = ref<string>("");

survey.onComplete.add(sender => {
  surveyResults.value = JSON.stringify(sender.data, null, 3);
  isSurveyCompleted.value = true;
});
</script>

<template>
  <div>
    <SurveyComponent :model="survey" />
    
    <div v-if="isSurveyCompleted">
      <p>Result JSON:</p>
      <code style="white-space: pre;">{{ surveyResults }}</code>
    </div>
  </div>
</template>