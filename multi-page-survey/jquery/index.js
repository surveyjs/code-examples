Survey.StylesManager.applyTheme("modern");

const surveyJson = {
    pages: [{
        elements: [{
            type: "html",
            html: "<h2>In this survey, we will ask you a couple questions about your impressions of our product.</h2>"
        }]
    }, {
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
        }]
    }, {
        elements: [{
            name: "what-would-make-you-more-satisfied",
            title: "What can we do to make your experience more satisfying?",
            type: "comment",
            visibleIf: "{satisfaction-score} = 4"
        }, {
            name: "nps-score",
            title: "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
            type: "rating",
            rateMin: 0,
            rateMax: 10,
        }],
        visibleIf: "{satisfaction-score} >= 4"
    }, {
        elements: [{
            name: "how-can-we-improve",
            title: "How can we improve our product?",
            type: "comment"
        }],
        visibleIf: "{satisfaction-score} = 3"
    }, {
        elements: [{
            name: "disappointing-experience",
            title: "Let us know about your disappointing experience with our product",
            type: "comment"
        }],
        visibleIf: "{satisfaction-score} =< 2"
    }],
    showQuestionNumbers: "off",
    firstPageIsStarted: true,
    startSurveyText: "Take the Survey",
    showPrevButton: false,
    completedHtml: "Thank you for your feedback!",
    showPreviewBeforeComplete: "showAnsweredQuestions"
};

const survey = new Survey.Model(surveyJson);

function displayResults (sender) {
    const results = JSON.stringify(sender.data, null, 4);
    document.querySelector("#surveyResults").textContent = results;
    document.querySelector("#resultsContainer").style.display = "block"
}

survey.onComplete.add(displayResults);

$(function() {
    $("#surveyContainer").Survey({ model: survey });
});
