'use client'

import { useState } from "react";
import {
  ICreatorOptions,
  // SurveyCreatorModel,
  // UploadFileEvent
} from "survey-creator-core";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.css";
// Enable Ace Editor in the JSON Editor tab
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/ext-searchbox";

const defaultCreatorOptions: ICreatorOptions = {
  autoSaveEnabled: true
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

export default function SurveyCreatorWidget(props: { json?: Object, options?: ICreatorOptions }) {
  let [creator, setCreator] = useState<SurveyCreator>();

  if (!creator) {
    creator = new SurveyCreator(props.options || defaultCreatorOptions);
    setCreator(creator);
  }

  creator.saveSurveyFunc = (saveNo: number, callback: (num: number, status: boolean) => void) => {
    window.localStorage.setItem("survey-json", creator.text);
    callback(saveNo, true);
    // saveSurveyJson(
    //     "https://your-web-service.com/",
    //     creator.JSON,
    //     saveNo,
    //     callback
    // );
  };

  // creator.onUploadFile.add((_: SurveyCreatorModel, options: UploadFileEvent) => {
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

  creator.text = JSON.stringify(props.json) || window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <SurveyCreatorComponent creator={creator} />
    </div>
  );
}

// function saveSurveyJson (url: string, json: object, saveNo: number, callback: (num: number, status: boolean) => void) {
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