import './App.css'

import 'survey-core/modern.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { SurveyPDF } from 'survey-pdf';

StylesManager.applyTheme("modern");

const surveyJson = {
  elements: [{
    name: "satisfaction-score",
    title: "How would you describe your experience with our product?",
    type: "radiogroup",
    choices: [
      { value: 5, text: "Fully satisfying" },
      { value: 4, text: "Generally satisfying" },
      { value: 3, text: "Neutral" },
      { value: 2, text: "Rather unsatisfying" },
      { value: 1, text: "Not satisfying at all" }
    ],
    isRequired: true
  }, {
    name: "how-can-we-improve",
    title: "In your opinion, how could we improve our product?",
    type: "comment"
  }, {
    name: "nps-score",
    title: "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
    type: "rating",
    rateMin: 0,
    rateMax: 10,
  }],
  showQuestionNumbers: "off",
  completedHtml: "Thank you for your feedback!",
};

const exportToPdfOptions = {
  fontSize: 12
};

const savePdf = function () {
  const surveyPdf = new SurveyPDF(surveyJson, exportToPdfOptions);
  surveyPdf.save();
};

function App() {
  const survey = new Model(surveyJson);
  
  survey.addNavigationItem({
    id: "pdf-export",
    title: "Save as PDF",
    action: savePdf
  });

  return (
    <Survey model={survey} id="surveyContainer" />
  );
}

export default App;
