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

2. Create a [`SurveyPDF`](https://surveyjs.io/pdf-generator/documentation/api-reference/surveypdf) instance. Its constructor accepts two parameters: a survey JSON schema and a [PDF document configuration](https://surveyjs.io/pdf-generator/documentation/api-reference/idocoptions). 

3. Specify the `data` property of a `SurveyPDF` instance to define question answers. If a survey contains default values, and you wish to preserve them, call the `mergeData(newObj)` method instead. For more information on how to programmatically define question answers, refer to the following help topic: [Populate Form Fields](https://surveyjs.io/form-library/documentation/design-survey/pre-populate-form-fields).

4. Call the [save(fileName)](https://surveyjs.io/pdf-generator/documentation/api-reference/surveypdf#save) method on the `SurveyPDF` instance to save a PDF form.

## Limitations

The following question types are not supported when you generate PDF forms in Node.js:

* [HTML](https://surveyjs.io/form-library/documentation/api-reference/add-custom-html-to-survey)
* [Image](https://surveyjs.io/form-library/documentation/api-reference/add-image-to-survey)
* [Image Picker](https://surveyjs.io/form-library/documentation/api-reference/add-image-to-survey)
* [Signature Pad](https://surveyjs.io/form-library/documentation/api-reference/signature-pad-model)

## SurveyJS PDF Generator Resources

- [Documentation](https://surveyjs.io/pdf-generator/documentation/overview)
- [Live Examples](https://surveyjs.io/pdf-generator/examples/)