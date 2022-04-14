import { useCallback } from 'react';

import 'survey-core/modern.min.css';
// import 'survey-core/survey.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

StylesManager.applyTheme("modern");

const surveyJson = {
  elements: [{
    name: "FirstName",
    title: "Enter your first name:",
    type: "text"
  }, {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  }]
};

function App() {
  const survey = new Model(surveyJson);
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}

export default App;
