import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import ColorPickerComponent from "./components/ColorPicker.vue";

createApp(App)
  .component("survey-color-picker", ColorPickerComponent)
  .mount("#app");
