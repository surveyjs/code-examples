Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    questions: [
        {
            type: "checkbox",
            name: "test",
            title: {
                en: 'Test en',
                de: 'Test de'
            },
            choicesByUrl: {
                //Points to the localized JSON imitating web service response
                url: "test.json", 
                valueName: 'id',
                titleName: 'title'
            }
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});


var languages = ['en', 'de'];
var currentLanguage = true;
//Switches locales
function changeLanguage() {
         currentLanguage = !currentLanguage;
         var locale = languages[+currentLanguage];
         survey.locale = locale;
     };
