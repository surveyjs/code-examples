import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import { surveyPlugin } from "survey-vue3-ui";
import { surveyCreatorPlugin } from "survey-creator-vue";

createApp(App)
  .use(surveyPlugin)
  .use(surveyCreatorPlugin)
  .mount("#app");