<template>
  <div>
    <SurveyComponent :model="survey" />
    
    <div v-if="isSurveyCompleted">
      <p>Result JSON:</p>
      <code style="white-space: pre;">{{ surveyResults }}</code>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { ref } from 'vue'; // Import the ref function

const surveyJson =  {
    pages: [{
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
        }, {
            name: "nps-score",
            title: "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
            type: "rating",
            rateMin: 0,
            rateMax: 10
        }],
    }, {
        elements: [{
            name: "how-can-we-improve",
            title: "In your opinion, how could we improve our product?",
            type: "comment"
        }],
    }, {
        elements: [{
            name: "disappointing-experience",
            title: "Please let us know why you had such a disappointing experience with our product",
            type: "comment"
        }],
    }]
};

const survey = new Model(surveyJson);

// Define additional variables
const isSurveyCompleted = ref(false);
const surveyResults = ref('');

survey.onComplete.add((sender, options) => {
  // Update the variables when the survey is completed
  surveyResults.value = JSON.stringify(sender.data, null, 3);
  isSurveyCompleted.value = true;
});
</script>
