# Add a Survey to an Angular v8&ndash;v11 Application

A recently-released [native implementation of SurveyJS Form Library for Angular](https://www.npmjs.com/package/survey-angular-ui) requires Angular v12.0.0 or newer. However, an obsolete Knockout-dependent implementation supports earlier Angular versions. This example shows how to integrate the obsolete version into your Angular v8&ndash;v11 application if you cannot migrate it to a more recent Angular version.

To view the example on your local machine, run the following commands:

```
git clone https://github.com/surveyjs/code-examples.git
cd legacy-angular/form-library
npm i
npm start
```

To add the Knockout-dependent version of SurveyJS Form Library to your Angular application, follow the instructions below. 

## Install the `survey-angular` npm Package

```
npm install survey-angular --save
```

## Configure Styles

Open the `angular.json` file and reference a style sheet that implements the required theme:

```js
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  // ...
  "projects": {
    "project-name": {
      "projectType": "application",
      // ...
      "architect": {
        "build": {
          // ...
          "options": {
            // ...
            "styles": [
              "src/styles.css",
              // Default V2 theme
              "node_modules/survey-angular/defaultV2.min.css",
              // Modern theme
              // "node_modules/survey-angular/modern.min.css"
            ],
            // ...
          }
        }
      }
    }
  }
}
```

## Create a Model

Models are specified by model schemas (JSON objects). For example, the following model schema declares two [textual questions](https://surveyjs.io/Documentation/Library?id=questiontextmodel), each with a [title](https://surveyjs.io/Documentation/Library?id=questiontextmodel#title) and a [name](https://surveyjs.io/Documentation/Library?id=questiontextmodel#name). Titles are displayed on screen. Names are used to identify the questions in code.

```js
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
```

To instantiate a model, pass the model schema to the [Model](https://surveyjs.io/Documentation/Library?id=surveymodel) constructor as shown in the code below. The model instance will be later used to render the survey. 

```js
import { Component, OnInit } from '@angular/core';
import { ..., Model } from "survey-angular";

@Component({
  // ...
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const survey = new Model(surveyJson);
  }
}
```

## Render the Survey

A survey should be rendered in an HTML element. Add this element to your component template:

```html
<div id="surveyContainer"></div>
```

To render a survey, call the `render()` method on the `SurveyNG` object as shown in the code below. Pass the model instance you created in the previous step to this method as the `model` property:

```js
import { Component, OnInit } from '@angular/core';
import { ..., SurveyNG } from "survey-angular";

@Component({
  // ...
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // ...
    SurveyNG.render("surveyContainer", { model: survey });
  }
}
```

## See Also

- [SurveyJS Website](https://surveyjs.io/)
- [Documentation](https://surveyjs.io/Documentation/Library)
- [Live Examples](https://surveyjs.io/Examples/Library)
- [What's New](https://surveyjs.io/WhatsNew)