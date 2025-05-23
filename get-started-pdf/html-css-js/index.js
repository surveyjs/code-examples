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
    completedHtml: "Thank you for your feedback!",
};

const survey = new Survey.Model(surveyJson);

const pdfDocOptions = {
    fontSize: 12
};

const savePdf = function (surveyData) {
    const surveyPdf = new SurveyPDF.SurveyPDF(surveyJson, pdfDocOptions);
    surveyPdf.data = surveyData;
    surveyPdf.save();
};

survey.addNavigationItem({
    id: "pdf-export",
    title: "Save as PDF",
    action: () => savePdf(survey.data)
});

document.addEventListener("DOMContentLoaded", function() {
    survey.render(document.getElementById("surveyContainer"));
});