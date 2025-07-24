export const marketResearchFormJson = {
  "title": "Market Research Questionnaire",
  "description": "Help us understand your preferences and improve our products",
  "logoPosition": "right",
  "pages": [
    {
      "name": "demographics",
      "title": "Demographics",
      "elements": [
        {
          "type": "radiogroup",
          "name": "age_group",
          "title": "What is your age group?",
          "isRequired": true,
          "choices": [
            { "value": "18-24", "text": "18-24" },
            { "value": "25-34", "text": "25-34" },
            { "value": "35-44", "text": "35-44" },
            { "value": "45-54", "text": "45-54" },
            { "value": "55-64", "text": "55-64" },
            { "value": "65+", "text": "65+" }
          ]
        },
        {
          "type": "radiogroup",
          "name": "gender",
          "title": "Gender",
          "choices": [
            { "value": "male", "text": "Male" },
            { "value": "female", "text": "Female" },
            { "value": "other", "text": "Other" },
            { "value": "prefer_not_to_say", "text": "Prefer not to say" }
          ]
        },
        {
          "type": "dropdown",
          "name": "income_range",
          "title": "Annual household income",
          "choices": [
            { "value": "under_25k", "text": "Under $25,000" },
            { "value": "25k_50k", "text": "$25,000 - $50,000" },
            { "value": "50k_75k", "text": "$50,000 - $75,000" },
            { "value": "75k_100k", "text": "$75,000 - $100,000" },
            { "value": "100k_150k", "text": "$100,000 - $150,000" },
            { "value": "over_150k", "text": "Over $150,000" }
          ]
        }
      ]
    },
    {
      "name": "product_usage",
      "title": "Product Usage",
      "elements": [
        {
          "type": "checkbox",
          "name": "products_used",
          "title": "Which of our products have you used? (Select all that apply)",
          "isRequired": true,
          "choices": [
            { "value": "product_a", "text": "Product A - Basic Plan" },
            { "value": "product_b", "text": "Product B - Premium Plan" },
            { "value": "product_c", "text": "Product C - Enterprise Solution" },
            { "value": "product_d", "text": "Product D - Mobile App" },
            { "value": "none", "text": "None of the above" }
          ]
        },
        {
          "type": "rating",
          "name": "overall_satisfaction",
          "title": "Overall satisfaction with our products",
          "isRequired": true,
          "rateMin": 1,
          "rateMax": 5,
          "minRateDescription": "Very Dissatisfied",
          "maxRateDescription": "Very Satisfied",
          "visibleIf": "{products_used} notempty and {products_used} != ['none']"
        },
        {
          "type": "radiogroup",
          "name": "usage_frequency",
          "title": "How often do you use our products?",
          "choices": [
            { "value": "daily", "text": "Daily" },
            { "value": "weekly", "text": "Weekly" },
            { "value": "monthly", "text": "Monthly" },
            { "value": "occasionally", "text": "Occasionally" },
            { "value": "rarely", "text": "Rarely" }
          ],
          "visibleIf": "{products_used} notempty and {products_used} != ['none']"
        }
      ]
    },
    {
      "name": "feedback",
      "title": "Feedback & Suggestions",
      "elements": [
        {
          "type": "matrix",
          "name": "feature_importance",
          "title": "How important are the following features to you?",
          "columns": [
            { "value": "very_important", "text": "Very Important" },
            { "value": "important", "text": "Important" },
            { "value": "neutral", "text": "Neutral" },
            { "value": "not_important", "text": "Not Important" },
            { "value": "not_applicable", "text": "N/A" }
          ],
          "rows": [
            { "value": "ease_of_use", "text": "Ease of use" },
            { "value": "pricing", "text": "Competitive pricing" },
            { "value": "customer_support", "text": "Customer support" },
            { "value": "feature_variety", "text": "Feature variety" },
            { "value": "reliability", "text": "Reliability" }
          ]
        },
        {
          "type": "comment",
          "name": "suggestions",
          "title": "What improvements would you like to see?",
          "rows": 4
        },
        {
          "type": "boolean",
          "name": "recommend",
          "title": "Would you recommend our products to others?",
          "isRequired": true
        }
      ]
    }
  ],
  "showProgressBar": "top",
  "showQuestionNumbers": "on",
  "completeText": "Submit Survey",
  "completedHtml": "<h3>Thank you for your valuable feedback!</h3><p>Your responses will help us improve our products and services.</p>"
};
const marketResearchForm = {
  id: 'marketResearchForm',
  name: "Market Research Form",
  json: marketResearchFormJson,
  createdAt: "2025-01-01T00:00:00.000Z",
  updatedAt: "2025-01-01T00:00:00.000Z"
};

export default marketResearchForm;