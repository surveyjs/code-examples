import { useCallback } from 'react';

import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

// const SURVEY_ID = 1;

const surveyJson = {
    elements: [{
    "type": "text",
     "name": "ANTI -TERRORISM LEGISLATION - YOUR DUTY",
     "state": "expanded",
     "title": "The Martyn’s Law legislation, formerly known as ‘Protect Duty’ is the result of the inquest and findings from the Manchester Arena terrorist attack enquiry. Martyn’s Law is not intended to be a financial burden to business, rather its focus is to promote and ensure the safety of people in Publicly Accessible Locations (PAL’s), or previously known as crowded places. For more information on Martyn’s please visit www……(insert link to legislation).Whilst this ISO31000 risk assessment will be conducted by a registered Counter Terrorism Security Specialists Register (CTSSR) or a Competent Person in the Workplace (CPIW), it is still your businesses risk assessment. Under Martyn’s Law your business is responsible for implementing the identified mitigation measures and you will be liable for the safety of people whilst at your place of business. Under Martyn’s Law there is an enforcement process to ensure the legislation is followed. Below are Ability to accept Enforcement Undertakings from organisations. Regulator issued Improvement/Enforcement Notices that will require organisations to take steps deemed necessary to address non- compliance. Variable monetary penalties to remove any financial benefit of non-compliance. Up to £18m or 5% of worldwide turnover for enhanced tier. Up to 10k for standard tier. Temporary restrictions or closure of a site to the public until sufficient measures can be taken to bring the risk down to an acceptable level. (enhanced tier only). Criminal sanctions for the most serious of breaches (enhanced tier only) and Obstruction related activity"
     },
     {
     "type": "boolean",
     "name": "question1",
     "title": "I confirm that I have read and agree to the above",
     "isRequired": true,
     "labelTrue": "Agree",
     "labelFalse": "Do Not Agree"
     },
     {
     "type": "multipletext",
     "name": "question2",
     "title": "Assessor's Details",
     "description": "Please provide your name as printed on any Qualification Certificate.",
     "isRequired": true,
     "items": [
     {
     "name": "First Name",
     "title": "First Name",
     },
     {
     "name": "Second name",
     "title": "Surname or Family Name",
     }
     ],
     "colCount": 2
     },
     {
     "type": "checkbox",
     "name": "question3",
     "visibleIf": "{I confirm that I have read and agree to the above.} = true",
     "title": "Qualification",
     "choices": [
     "Security Specialist (SQSS)",
      "Competent Person CIPW Level 3",
      "Other"
     ],
     "maxSelectedChoices": 1
     },
     {
     "type": "text",
     "name": "question5",
     "visibleIf": "{Qualification} = ['Security Specialist (SQSS)']",
     "title": "Certificate Number or Reference",
     "description": "Please provide your certificate number.",
     "isRequired": true,
     "inputType": "number"
     },
     {
     "type": "text",
     "name": "CIPW Level 3 Certificate Number",
     "visibleIf": "{Qualification} = ['Competent Person CIPW Level 3']",
     "description": "Please provide the number from your qualification certificate."
     },
     {
     "type": "text",
     "name": "Other - Please state full qualification",
     "visibleIf": "{Qualification} = ['Other'] and ['I confirm that I have read and agree to the above.} = true']"
     },
     {
     "type": "text",
     "name": "Start Date",
     "visibleIf": "{I confirm that I have read and agree to the above.} = true",
     "isRequired": true,
     "inputType": "date"
     },
     {
     "type": "text",
     "name": "Assessor Access Information",
     "state": "expanded",
     "titleLocation": "top",
     "hideNumber": true,
     "placeholder": "The assessor will need to have an understanding of your business so please provide accurate information and provide as much information as possible. If your business has a branch number or any other unique identifier, please insert this. Under capacity, this refers to how many people could fit into your site/business and not your regular attendance numbers."
     },
     {
     "type": "multipletext",
     "name": "Site Address",
     "state": "expanded",
     "hideNumber": true,
     "isRequired": true,
     "items": [
     {
     "name": "Site 1",
       "title": "Branch Name or Site Reference"
      },
      {
       "name": "Site 2",
       "title": "Number or Name of Building"
      },
      {
       "name": "site 3",
       "title": "Street or Road name"
      },
      {
       "name": "site 4",
       "title": "City, Town or Village"
      },
      {
       "name": "site 5",
       "title": "County"
      },
      {
       "name": "site 6",
       "title": "Postcode"
     }
     ],
     "itemSize": 3,
     "colCount": 2
     },
     {
     "type": "radiogroup",
     "name": "Tier Level",
     "maxWidth": "30%",
     "description": "Please select the Tier Level of site or building",
     "choices": [
     {
     "value": "Level 1",
       "text": "Level 1 (100-799)"
      },
      {
       "value": "Level 2",
       "text": "Level 2 (800+)"
     }
     ]
     },
     {
     "type": "text",
     "name": "Capacity",
     "maxWidth": "30%",
     "description": "Please fill in the maximum capacity of the Site/Building at any time. Including Staff, Customers/Clients, Audience/Crowd.",
     "hideNumber": true,
     "size": 15
     },
     {
     "type": "radiogroup",
     "name": "question 1",
     "state": "expanded",
     "visibleIf": "{I confirm that I have read and agree to the above.} = true",
     "maxWidth": "30%",
     "choices": [
     {
     "value": "CC",
       "text": "City Centre"
      },
      {
       "value": "CLT",
       "text": "Centre of Large Town"
      },
      {
       "value": "CST",
       "text": "Centre of Small Town"
      },
      {
       "value": "Ur",
       "text": "Urban"
      },
      {
       "value": "Ru",
       "text": "Rural"
     }
     ],
     "showOtherItem": true,
     "otherPlaceholder": "Please give brief description of location",
     "visibleIf": "{I confirm that I have read and agree to the above.} = true",
     },
     {
     "type": "matrix",
     "name": "Threat Matrix",
     "state": "expanded",
     "useDisplayValuesInDynamicTexts": false,
     "title": "Before making your choice please see \"threat levels' in our resources section.",
     "hideNumber": true,
     "valueName": "Risk",
     "columns": [
     {
     "value": "1",
       "text": "Impact - Very Low"
      },
      {
      "value": "2",
      "text": "Impact - Low"
      },
      {
       "value": "3",
       text: "Impact - Moderate"
      },
      {
      "value": "4",
       "text": "Impact - High"
      },
      {
       "value": "5",
       "text": "Impact - Very High"
     }
     ],
     "rows": [
     {
     "value": "1",
      "text": "Likelyhood - Very Low"
      },
      {
      "value": "2",
      " text": "Likelyhood - Low"
      },
      {
      "value": "3",
      "text": "Likelyhood - Moderate"
      },
      {
      "value": "4",
      "text": "Likelyhood - High"
      },
      {
      "value": "5",
      "text": "Likelyhood - Very High"
     }
     ]
     }
     ],
     "visibleIf": "{I confirm that I have read and agree to the above.} = true",
     "title": "Risk Matrix"
 }
 ],
 "questionsOrder": "random",
 "showQuestionNumbers": "off",
 "widthMode": "responsive",
 "width": "800px"
}

function App() {
  const survey = new Model(surveyJson);
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
    // saveSurveyResults(
    //   "https://your-web-service.com/" + SURVEY_ID,
    //   sender.data
    // )
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}

// function saveSurveyResults(url, json) {
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     body: JSON.stringify(json)
//   })
//   .then(response => {
//     if (response.ok) {
//       // Handle success
//     } else {
//       // Handle error
//     }
//   })
//   .catch(error => {
//     // Handle error
//   });
// }

export default App;
