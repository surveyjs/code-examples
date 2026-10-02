import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import ColorPickerComponent from "./components/ColorPicker.vue";

createApp(App)
  .component("survey-color-picker", ColorPickerComponent)
  .mount("#app");
