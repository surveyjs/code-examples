# Add Survey Creator / Form Builder to an Angular v8&ndash;v11 Application

A recently-released [native implementation of Survey Creator for Angular](https://www.npmjs.com/package/survey-creator-angular) requires Angular v12.0.0 or newer. However, an obsolete Knockout-dependent implementation supports earlier Angular versions. This example shows how to integrate the obsolete version into your Angular v8&ndash;v11 application if you cannot migrate it to a more recent Angular version.

To view the example on your local machine, run the following commands:

```
git clone https://github.com/surveyjs/code-examples.git
cd legacy-angular/survey-creator
npm i
npm start
```

To add the Knockout-dependent version of Survey Creator to your Angular application, follow the instructions below. 

## Install the `survey-creator-knockout` npm Package

```cmd
npm install survey-creator-knockout --save
```

## Configure Styles

Open the `angular.json` file and reference Survey Creator and SurveyJS Form Library style sheets:

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
              "node_modules/survey-core/defaultV2.min.css",
              "node_modules/survey-creator-core/survey-creator-core.min.css"
            ],
            // ...
          }
        }
      }
    }
  }
}
```

## Configure Survey Creator

To configure the Survey Creator component, specify [its properties](https://surveyjs.io/Documentation/Survey-Creator?id=ICreatorOptions) in a configuration object. In this tutorial, the object enables the following properties:

- [`showLogicTab`](https://surveyjs.io/Documentation/Survey-Creator?id=ICreatorOptions#showLogicTab)        
Displays the Logic tab in the tab panel.

- [`isAutoSave`](https://surveyjs.io/Documentation/Survey-Creator?id=ICreatorOptions#isAutoSave)        
Automatically saves the survey JSON schema on every change.

```js
const creatorOptions = {
  showLogicTab: true
};
```

Pass the configuration object to the `SurveyCreator` constructor as shown in the code below to instantiate Survey Creator. Assign the produced instance to a constant that will be used later to render the component:

```js
import { Component, OnInit } from '@angular/core';
import { SurveyCreator } from "survey-creator-knockout";

@Component({
  selector: 'survey-creator',
  templateUrl: './survey-creator.component.html',
  styleUrls: ['./survey-creator.component.css']
})
export class SurveyCreatorComponent implements OnInit {
  ngOnInit() {
    const creator = new SurveyCreator(creatorOptions);
  }
}
```

## Render Survey Creator

Switch to the component template. Add a page element that will serve as the Survey Creator container:

```html
<div id="surveyCreator"></div>
```

```css
#surveyCreator {
  height: 100vh;
  width: 100vw;
}
```

To render Survey Creator in the page element, call the `render(containerId)` method on the Survey Creator instance you created in the previous step:

```js
// ...
@Component({
  // ...
})
export class SurveyCreatorComponent implements OnInit {
  ngOnInit() {
    // ...
    creator.render("surveyCreator");
  }
}
```

## Save and Load Survey Model Schemas

Survey Creator produces survey model schemas as JSON objects. You can persist these objects on your server: save updates and restore previously saved schemas. To save a JSON object, implement the `saveSurveyFunc` function. It accepts two arguments:

- `saveNo`      
An incremental number of the current change. Since web services are asynchronous, you cannot guarantee that the service receives the changes in the same order as the client sends them. For example, change #11 may arrive to the server faster than change #10. In your web service code, update the storage only if you receive changes with a higher `saveNo`.

- `callback`        
A callback function. Call it and pass `saveNo` as the first argument. Set the second argument to `true` or `false` based on whether the server applied or rejected the change.

The following code shows how to use the `saveSurveyFunc` function to save a survey model schema in a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">`localStorage`</a> or in your web service:


```js
// ...
@Component({
  // ...
})
export class SurveyCreatorComponent implements OnInit {
  ngOnInit() {
    // ...
    creator.saveSurveyFunc = (saveNo: number, callback: Function) => { 
      // If you use localStorage:
      window.localStorage.setItem("survey-json", creator.text);
      callback(saveNo, true);

      // If you use a web service:
      saveSurveyJson(
          "https://your-web-service.com/",
          creator.JSON,
          saveNo,
          callback
      );
    };
    // ...
  }
}

// If you use a web service:
function saveSurveyJson(url, json, saveNo, callback) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(json)
  })
  .then(response => {
    if (response.ok) {
      callback(saveNo, true);
    } else {
      callback(saveNo, false);
    }
  })
  .catch(error => {
    callback(saveNo, false);
  });
}
```

To load a survey model schema JSON into Survey Creator, assign the schema to Survey Creator's [`JSON`](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#JSON) or [`text`](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#text) property. Use `text` if the JSON object is converted to a string; otherwise, use `JSON`. The following code takes a survey model schema from the `localStorage`. If the schema is not found (for example, when Survey Creator is launched for the first time), a default JSON is used:


```js
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

// ...
@Component({
  // ...
})
export class SurveyCreatorComponent implements OnInit {
  ngOnInit() {
    // ...
    creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
    // ...
  }
}
```

## See Also

- [SurveyJS Website](https://surveyjs.io/)
- [Documentation](https://surveyjs.io/Documentation/Library)
- [Live Examples](https://surveyjs.io/Examples/Library)
- [What's New](https://surveyjs.io/WhatsNew)