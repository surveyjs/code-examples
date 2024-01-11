import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import { surveyPlugin } from "survey-vue3-ui";
import { surveyCreatorPlugin } from "survey-creator-vue";
import ColorPickerComponent from "./components/ColorPicker.vue";
import { Sketch, Compact, Slider } from "@lk77/vue3-color";

createApp(App)
  .use(surveyPlugin)
  .use(surveyCreatorPlugin)
  .component("survey-color-picker", ColorPickerComponent)
  .component("slider-picker", Slider)
  .component("sketch-picker", Sketch)
  .component("compact-picker", Compact)
  .mount("#app");
