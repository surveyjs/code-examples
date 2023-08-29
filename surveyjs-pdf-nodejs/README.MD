# Create PDF Surveys on a Server-Side Node.js framework

This example demonstrates how to export a survey to PDF on a server-side Node.js framework. 

### Run the Demo
To run the demo, do the following.

* Install NPM packages. 
 Open a terminal and run the following command to install NPM packages.
 ```
 npm install
 ```
 * Run the `index.js` file to export a survey.
 ```
 node index.js
 ```
 * The exported PDF will appear within the application folder. Review the `survey-result.pdf` file.

### How to Export Surveys

To export a survey on Node.js environment, follow these steps:

* Install the [survey-pdf](https://www.npmjs.com/package/survey-pdf) package.
* Create a [SurveyPDF](https://surveyjs.io/pdf-generator/documentation/api-reference/surveypdf) instance. Its constructor accepts two parameters: a survey JSON schema and export properties. 

* Define question answers.
To specify question answers, define the `data` property of a SurveyJS PDF object. If a survey contains default values and you wish to preserve them, call the `mergeData` function. 
> For more information on how to programmatically define question values, refer to the following help topic: [Populate Form Fields](https://surveyjs.io/form-library/documentation/design-survey/pre-populate-form-fields).

* To save a PDF document with the exported survey, call the [save(fileName)](https://surveyjs.io/pdf-generator/documentation/api-reference/surveypdf#save) method on the SurveyPDF instance.

### Limitations of Exporting Surveys on Node.js

When exporting surveys on Node.js environment, take note that the following question types are not supported:
* [HTML](https://surveyjs.io/form-library/documentation/api-reference/add-custom-html-to-survey)
* [Image](https://surveyjs.io/form-library/documentation/api-reference/add-image-to-survey) 
* [Image Picker](https://surveyjs.io/form-library/documentation/api-reference/add-image-to-survey)
* [Signature Pad](https://surveyjs.io/form-library/documentation/api-reference/signature-pad-model)