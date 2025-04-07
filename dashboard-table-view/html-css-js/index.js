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
        name: "nps-score",
        title: "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
        type: "rating",
        rateMin: 0,
        rateMax: 10,
    }],
    completedHtml: "Thank you for your feedback!",
};

const survey = new Survey.Model(surveyJson);

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function generateData() {
    const data = [];
    for (let index = 0; index < 100; index++) {
        const satisfactionScore = randomIntFromInterval(1, 5);
        const npsScore = satisfactionScore > 3 ? randomIntFromInterval(7, 10) : randomIntFromInterval(1, 6);
        data.push({
            "satisfaction-score": satisfactionScore,
            "nps-score": npsScore
        });
    }
    return data;
}

const surveyDataTable = new SurveyAnalyticsTabulator.Tabulator(
    survey,
    generateData()
);

document.addEventListener("DOMContentLoaded", function() {
    surveyDataTable.render(document.getElementById("surveyDataTable"));
});