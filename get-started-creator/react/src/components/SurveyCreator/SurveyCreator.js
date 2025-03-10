import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/survey-core.min.css";
import "survey-creator-core/survey-creator-core.min.css";

const creatorOptions = {
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

export function SurveyCreatorWidget() {
  const creator = new SurveyCreator(creatorOptions);
  creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
  creator.saveSurveyFunc = (saveNo, callback) => { 
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
  //   options.files.forEach(file => {
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
  return (
    <SurveyCreatorComponent creator={creator} />
  )
}

// function saveSurveyJson(url, json, saveNo, callback) {
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