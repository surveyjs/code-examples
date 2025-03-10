<script setup lang="ts">
import 'survey-core/survey-core.min.css';
import "survey-creator-core/survey-creator-core.min.css";

import type { ICreatorOptions } from "survey-creator-core";
import { SurveyCreatorModel } from "survey-creator-core";
import { SurveyCreatorComponent } from 'survey-creator-vue';

const creatorOptions: ICreatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

const defaultJson = {
  pages: [{
    name: "Name",
    elements: [{
      name: "FirstName",
      title: "Enter your first name:",
      type: "text"
    }, {
      name: "LastName",
      title: "Enter your last name:",
      type: "text"
    }]
  }]
};

const creator = new SurveyCreatorModel(creatorOptions);
creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
creator.saveSurveyFunc = (saveNo: number, callback: Function) => { 
  window.localStorage.setItem("survey-json", creator.text);
  callback(saveNo, true);
  // saveSurveyJson(
  //     "https://your-web-service.com/",
  //     creator.JSON,
  //     saveNo,
  //     callback
  // );
};

// creator.onUploadFile.add((_, options) => {
//   const formData = new FormData();
//   options.files.forEach((file: File) => {
//     formData.append(file.name, file);
//   });
//   fetch("https://example.com/uploadFiles", {
//     method: "post",
//     body: formData
//   }).then(response => response.json())
//     .then(result => {
//       options.callback(
//         "success",
//         // A link to the uploaded file
//         "https://example.com/files?name=" + result[options.files[0].name]
//       );
//     })
//     .catch(error => {
//       options.callback('error');
//     });
// });

// function saveSurveyJson(url: string, json: object, saveNo: number, callback: Function) {
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     body: JSON.stringify(json)
//   })
//   .then(response => {
//     if (response.ok) {
//       callback(saveNo, true);
//     } else {
//       callback(saveNo, false);
//     }
//   })
//   .catch(error => {
//     callback(saveNo, false);
//   });
// }
</script>

<template>
  <SurveyCreatorComponent :model="creator" />
</template>