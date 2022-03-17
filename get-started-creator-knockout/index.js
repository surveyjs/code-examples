const creatorOptions = {
    showLogicTab: true,
    isAutoSave: true
};

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

const creator = new SurveyCreator.SurveyCreator(creatorOptions);
creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
creator.saveSurveyFunc = (saveNo, callback) => { 
    window.localStorage.setItem("survey-json", creator.text);
    callback(saveNo, true);
    // saveSurveyJson(
    //     "https://your-web-service.com/",
    //     creator.JSON,
    //     saveNo,
    //     callback
    // );
};

document.addEventListener("DOMContentLoaded", function() {
    creator.render("surveyCreator");
});

// function saveSurveyJson(url, json, saveNo, callback) {
//     const request = new XMLHttpRequest();
//     request.open('POST', url);
//     request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
//     request.addEventListener('load', () => {
//         callback(saveNo, true);
//     });
//     request.addEventListener('error', () => {
//         callback(saveNo, false);
//     });
//     request.send(JSON.stringify(json));
// }