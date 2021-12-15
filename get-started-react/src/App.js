import { useCallback } from 'react';

import 'survey-react/modern.min.css';
// import 'survey-react/survey.min.css';
import { Survey, StylesManager, Model } from 'survey-react';

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
