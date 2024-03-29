# Create PDF Forms in Node.js

This example demonstrates how to generate a PDF form using the [SurveyJS](https://surveyjs.io/) form builder libraries and the Node.js server-side framework. 

## Run the project

1. Install npm packages.
 
    ```
    npm install
    ```

1. Execute the `index.js` file to generate a PDF form as a `survey-result.pdf` file. You will find this file in the project folder.

    ```
    node index.js
    ```

## How to Generate PDF Forms

To generate a PDF form in a Node.js environment, follow these steps:

1. Install the [`survey-pdf`](https://www.npmjs.com/package/survey-pdf) npm package.

2. *(Optional)* If your survey contains [HTML](https://surveyjs.io/form-library/documentation/api-reference/add-custom-html-to-survey) or [Signature](https://surveyjs.io/form-library/documentation/api-reference/signature-pad-model) questions, install the [`jsdom`](https://www.npmjs.com/package/jsdom) package to create a simulated web environment in a Node.js application. Create a JSDOM instance and reference the `window` and `document` objects from the JSDOM instance in a global scope.

3. Create a [`SurveyPDF`](https://surveyjs.io/pdf-generator/documentation/api-reference/surveypdf) instance. Its constructor accepts two parameters: a survey JSON schema and a [PDF document configuration](https://surveyjs.io/pdf-generator/documentation/api-reference/idocoptions). 

4. Specify the `data` property of a `SurveyPDF` instance to define question answers. If a survey contains default values and you wish to preserve them, call the `mergeData(newObj)` method instead. For more information on how to programmatically define question answers, refer to the following help topic: [Populate Form Fields](https://surveyjs.io/form-library/documentation/design-survey/pre-populate-form-fields).

5. Call the [save(fileName)](https://surveyjs.io/pdf-generator/documentation/api-reference/surveypdf#save) method on the `SurveyPDF` instance to save a PDF form.

## Limitations

Please take into account the following restrictions when you generate PDF forms in Node.js:

- **HTML support is limited**     
In Node.js, [HTML](https://surveyjs.io/form-library/documentation/api-reference/add-custom-html-to-survey) questions do not support the `"image"` [render mode](https://surveyjs.io/pdf-generator/documentation/api-reference/idocoptions#htmlRenderAs) and complex markup.

- **Only base64-encoded images are supported**       
Images embedded in a survey, such as a [survey logo](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#logo) or images from the [Image](https://surveyjs.io/form-library/documentation/api-reference/add-image-to-survey) and [Image Picker](https://surveyjs.io/form-library/documentation/api-reference/add-image-to-survey) questions, can be specified as base64-encoded strings or as URLs. However, Node.js supports only base64-encoded strings.

## SurveyJS PDF Generator Resources

- [Documentation](https://surveyjs.io/pdf-generator/documentation/overview)
- [Live Examples](https://surveyjs.io/pdf-generator/examples/)