import { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import { Serializer } from "survey-core";
import {
  getSurveyJSON,
  saveSurveyJSON,
  getSurveyName,
  saveSurveyName
} from "./WebDataService";
// Import stylesheets for SurveyJS Library and Survey Creator
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.min.css";

// Make survey title required. End users cannot make it empty in designer or property grid
Serializer.findProperty("survey", "title").isRequired = true;

export function SurveyCreatorWidget(props) {
  // Create a Survey Creator instance
  const creator = new SurveyCreator();
  // Enable auto save
  creator.autoSaveEnabled = true;
  // A function executed to save the survey definition
  creator.saveSurveyFunc = (saveNo, callback) => {
    // You can use `this.creator.text` as an alternative to `this.creator.JSON`
    saveSurveyJSON(id(), creator.JSON, () => {
      callback(saveNo, true);
    });
  };
  creator.onModified.add((_, options) => {
    // We are interested in property changes only
    if (options.type === "PROPERTY_CHANGED") {
      // Update the survey name in the database when the survey title is changed
      if (
        options.name === "title" &&
        !!options.target &&
        options.target.getType() === "survey"
      ) {
        saveSurveyName(id(), options.newValue);
      }
    }
  });

  const id = useCallback(() => {
    let res = props.id;
    if (!res) return -1;
    return Number(res);
  }, [props.id]);

  useEffect(() => {
    // Load survey definition
    getSurveyJSON(id(), (json) => {
      // Save the survey title to prevent it from being overwritten
      const prevTitle = creator.survey.title;
      // You can use `this.creator.text` as an alternative to `this.creator.JSON`
      creator.JSON = json;
      if (!!prevTitle) {
        creator.survey.title = prevTitle;
      }
    });
    // Assign the survey name from the database to the survey title
    getSurveyName(id(), (name) => {
      creator.survey.title = name;
    });
  });
  const style = { height: "100vh" };
  return (
    <div style={style}>
      <Link to="/">
        <button type="button" className="btn btn--primary back-btn">
          Back To List
        </button>
      </Link>
      <SurveyCreatorComponent creator={creator}></SurveyCreatorComponent>
    </div>
  );
}
