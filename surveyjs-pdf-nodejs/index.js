const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const SurveyPDF = require("survey-pdf");

const { window } = new JSDOM(`...`);
global.window = window;
global.document = window.document;

const json = {
  "title": "COVID-19 Screening Form",
  "focusFirstQuestionAutomatic": false,
  "pages": [
    {
      "name": "patient-info",
      "elements": [
        {
          "type": "html",
          "name": "introMsg",
          "html": "<i>All fields with an asterisk (*) are required fields and must be filled out in order to process information in strict confidentiality.</i>"
        },
        {
          "type": "panel",
          "name": "full-name",
          "elements": [
            {
              "type": "text",
              "name": "first-name",
              "title": "First name",
              "isRequired": true,
              "maxLength": 25
            },
            {
              "type": "text",
              "name": "last-name",
              "startWithNewLine": false,
              "title": "Last name",
              "isRequired": true,
              "maxLength": 25
            }
          ],
          "title": "Full name"
        },
        {
          "type": "panel",
          "name": "personal-info",
          "elements": [
            {
              "type": "text",
              "name": "ssn",
              "title": "Social Security number",
              "isRequired": true,
              "validators": [
                {
                  "type": "regex",
                  "text": "Your SSN must be a 9-digit number.",
                  "regex": "^\\d{9}$"
                }
              ],
              "maxLength": 9
            },
            {
              "type": "text",
              "name": "birthdate",
              "startWithNewLine": false,
              "title": "Date of Birth",
              "isRequired": true,
              "inputType": "date"
            }
          ]
        }
      ],
      "title": "Patient Information"
    },
    {
      "name": "symptoms-page",
      "elements": [
        {
          "type": "checkbox",
          "name": "symptoms",
          "title": "Have you experienced any of the following symptoms of COVID-19 within the last 48 hours?",
          "isRequired": true,
          "choices": [
            "Fever or chills",
            "New and persistent cough",
            "Shortness of breath or difficulty breathing",
            "Fatigue",
            "Muscle or body aches",
            "New loss of taste or smell",
            "Sore throat"
          ],
          "showNoneItem": true,
          "noneText": "No symptoms"
        }
      ],
      "title": "Current Symptoms"
    },
    {
      "name": "contacts",
      "elements": [
        {
          "type": "boolean",
          "name": "contacted-person-with-symptoms",
          "title": "Have you been in contact with anyone in the last 14 days who is experiencing these symptoms?"
        },
        {
          "type": "radiogroup",
          "name": "contacted-covid-positive",
          "title": "Have you been in contact with anyone who has since tested positive for COVID-19?",
          "choices": [
            "Yes",
            "No",
            "Not sure"
          ]
        }
      ],
      "title": "Contacts"
    },
    {
      "name": "travels",
      "elements": [
        {
          "type": "boolean",
          "name": "travelled",
          "title": "Have you travelled abroad in the last 14 days?"
        },
        {
          "type": "text",
          "name": "travel-destination",
          "visibleIf": "{travelled} = true",
          "title": "Where did you go?"
        }
      ],
      "title": "Travels"
    },
    {
      "name": "tests",
      "elements": [
        {
          "type": "boolean",
          "name": "tested-covid-positive",
          "title": "Have you tested positive for COVID-19 in the past 10 days?"
        },
        {
          "type": "boolean",
          "name": "awaiting-covid-test",
          "title": "Are you currently awaiting results from a COVID-19 test?"
        },
        {
          "type": "paneldynamic",
          "name": "emergency-contacts",
          "visibleIf": "(({tested-covid-positive} = true or {contacted-covid-positive} = 'Yes') or ({symptoms} notempty and {symptoms} notcontains 'none'))",
          "title": "Emergency Contacts",
          "description": "If possible, it's best to specify at least TWO emergency contacts.",
          "isRequired": true,
          "templateElements": [
            {
              "type": "text",
              "name": "emergency-first-name",
              "title": "First name"
            },
            {
              "type": "text",
              "name": "emergency-last-name",
              "startWithNewLine": false,
              "title": "Last name"
            },
            {
              "type": "text",
              "name": "emergency-relationship",
              "title": "Relationship"
            },
            {
              "type": "text",
              "name": "emergency-phone",
              "startWithNewLine": false,
              "title": "Phone number",
              "inputType": "tel"
            }
          ],
          "panelsState": "firstExpanded",
          "confirmDelete": true,
          "panelAddText": "Add a new contact person"
        }
      ],
      "title": "Tests"
    },
    {
      "name": "finalization",
      "elements": [
        {
          "type": "comment",
          "name": "additional-info",
          "title": "Additional information"
        },
        {
          "type": "text",
          "name": "date",
          "title": "Date",
          "inputType": "date"
        },
        {
          "type": "signaturepad",
          "name": "signature",
          "startWithNewLine": false,
          "title": "Signature"
        }
      ],
      "title": "Miscellaneous"
    }
  ],
  "questionErrorLocation": "bottom",
  "completeText": "Submit",
  "showPreviewBeforeComplete": "showAnsweredQuestions",
  "widthMode": "static",
  "width": "1000px"
}
const surveyPDF = new SurveyPDF.SurveyPDF(json, { htmlRenderAs: "standard" });

surveyPDF.data = {
  "first-name": "Jane",
  "last-name": "Doe",
  "ssn": "937464652",
  "birthdate": "1990-09-21",
  "symptoms": [
     "none"
  ],
  "contacted-person-with-symptoms": false,
  "contacted-covid-positive": "Not sure",
  "travelled": false,
  "tested-covid-positive": false,
  "awaiting-covid-test": false,
  "date": "2023-08-29",
  "signature": "data:image/png;base64,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"
}
surveyPDF.save("survey-result.pdf");