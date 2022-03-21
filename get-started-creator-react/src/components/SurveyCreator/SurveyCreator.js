import { Component } from "react";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
// Import CSS files for SurveyJS (survey-core) and Survey Creator
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

const creatorOptions = {
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

export class SurveyCreatorWidget extends Component {
  constructor() {
    super();
    this.creator = new SurveyCreator(creatorOptions);
  }
  componentDidMount() {
    this.creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
    this.creator.saveSurveyFunc = (saveNo, callback) => { 
      window.localStorage.setItem("survey-json", this.creator.text);
      callback(saveNo, true);
      // saveSurveyJson(
      //     "https://your-web-service.com/",
      //     creator.JSON,
      //     saveNo,
      //     callback
      // );
    };
  }
  render() {
    return (
      <SurveyCreatorComponent creator={this.creator} />
    );
  }
}

// function saveSurveyJson(url, json, saveNo, callback) {
//   const request = new XMLHttpRequest();
//   request.open('POST', url);
//   request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
//   request.addEventListener('load', () => {
//       callback(saveNo, true);
//   });
//   request.addEventListener('error', () => {
//       callback(saveNo, false);
//   });
//   request.send(JSON.stringify(json));
// }