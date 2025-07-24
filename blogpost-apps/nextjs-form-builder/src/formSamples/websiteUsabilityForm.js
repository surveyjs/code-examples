const websiteUsabilityFormJson = {
  "title": "Website Usability Survey",
  "description": "Help us improve your experience on our website",
  "pages": [
    {
      "name": "visitor_info",
      "title": "Visitor Information",
      "elements": [
        {
          "type": "radiogroup",
          "name": "visit_frequency",
          "title": "How often do you visit our website?",
          "isRequired": true,
          "choices": [
            { "value": "first_time", "text": "This is my first visit" },
            { "value": "weekly", "text": "Weekly" },
            { "value": "monthly", "text": "Monthly" },
            { "value": "few_times_year", "text": "A few times per year" },
            { "value": "daily", "text": "Daily" }
          ]
        },
        {
          "type": "radiogroup",
          "name": "device_used",
          "title": "What device are you primarily using to browse our website?",
          "isRequired": true,
          "choices": [
            { "value": "desktop", "text": "Desktop computer" },
            { "value": "laptop", "text": "Laptop" },
            { "value": "tablet", "text": "Tablet" },
            { "value": "smartphone", "text": "Smartphone" }
          ]
        },
        {
          "type": "dropdown",
          "name": "browser",
          "title": "Which web browser are you using?",
          "choices": [
            { "value": "chrome", "text": "Google Chrome" },
            { "value": "firefox", "text": "Mozilla Firefox" },
            { "value": "safari", "text": "Safari" },
            { "value": "edge", "text": "Microsoft Edge" },
            { "value": "other", "text": "Other" }
          ]
        },
        {
          "type": "checkbox",
          "name": "visit_purpose",
          "title": "What was the primary purpose of your visit today? (Select all that apply)",
          "isRequired": true,
          "choices": [
            { "value": "browse_products", "text": "Browse products/services" },
            { "value": "make_purchase", "text": "Make a purchase" },
            { "value": "get_support", "text": "Get customer support" },
            { "value": "find_information", "text": "Find specific information" },
            { "value": "contact_us", "text": "Contact us" },
            { "value": "create_account", "text": "Create an account" },
            { "value": "just_browsing", "text": "Just browsing" }
          ]
        }
      ]
    },
    {
      "name": "usability_ratings",
      "title": "Usability Assessment",
      "elements": [
        {
          "type": "matrix",
          "name": "website_ratings",
          "title": "Please rate the following aspects of our website:",
          "isRequired": true,
          "columns": [
            { "value": "excellent", "text": "Excellent" },
            { "value": "good", "text": "Good" },
            { "value": "fair", "text": "Fair" },
            { "value": "poor", "text": "Poor" },
            { "value": "na", "text": "N/A" }
          ],
          "rows": [
            { "value": "ease_navigation", "text": "Ease of navigation" },
            { "value": "page_load_speed", "text": "Page loading speed" },
            { "value": "visual_design", "text": "Visual design" },
            { "value": "content_quality", "text": "Content quality" },
            { "value": "mobile_experience", "text": "Mobile experience" },
            { "value": "search_functionality", "text": "Search functionality" }
          ]
        },
        {
          "type": "radiogroup",
          "name": "task_completion",
          "title": "Were you able to complete your intended task on our website?",
          "isRequired": true,
          "choices": [
            { "value": "yes_easily", "text": "Yes, easily" },
            { "value": "yes_with_difficulty", "text": "Yes, but with some difficulty" },
            { "value": "partially", "text": "Partially" },
            { "value": "no", "text": "No, I couldn't complete it" }
          ]
        },
        {
          "type": "comment",
          "name": "task_difficulty",
          "title": "If you had difficulty, please describe what made it challenging:",
          "rows": 3,
          "visibleIf": "{task_completion} != 'yes_easily'"
        },
        {
          "type": "rating",
          "name": "overall_satisfaction",
          "title": "Overall satisfaction with the website",
          "isRequired": true,
          "rateMin": 1,
          "rateMax": 5,
          "minRateDescription": "Very Dissatisfied",
          "maxRateDescription": "Very Satisfied"
        }
      ]
    },
    {
      "name": "specific_feedback",
      "title": "Specific Feedback",
      "elements": [
        {
          "type": "checkbox",
          "name": "problematic_areas",
          "title": "Which areas of the website, if any, caused you problems? (Select all that apply)",
          "choices": [
            { "value": "homepage", "text": "Homepage" },
            { "value": "product_pages", "text": "Product/Service pages" },
            { "value": "checkout", "text": "Checkout process" },
            { "value": "search", "text": "Search results" },
            { "value": "contact", "text": "Contact information" },
            { "value": "account", "text": "Account creation/login" },
            { "value": "support", "text": "Support/Help section" },
            { "value": "none", "text": "None - everything worked well" }
          ]
        },
        {
          "type": "comment",
          "name": "liked_most",
          "title": "What did you like most about our website?",
          "rows": 3
        },
        {
          "type": "comment",
          "name": "improvements",
          "title": "What improvements would you suggest?",
          "rows": 4
        },
        {
          "type": "boolean",
          "name": "recommend_website",
          "title": "Would you recommend our website to others?",
          "isRequired": true
        },
        {
          "type": "radiogroup",
          "name": "return_likelihood",
          "title": "How likely are you to return to our website?",
          "isRequired": true,
          "choices": [
            { "value": "very_likely", "text": "Very likely" },
            { "value": "likely", "text": "Likely" },
            { "value": "neutral", "text": "Neutral" },
            { "value": "unlikely", "text": "Unlikely" },
            { "value": "very_unlikely", "text": "Very unlikely" }
          ]
        }
      ]
    }
  ],
  "showProgressBar": "bottom",
  "showQuestionNumbers": "onPage",
  "completeText": "Submit Feedback",
  "completedHtml": "<h3>Thank you for your feedback!</h3><p>Your input is valuable and will help us improve our website experience.</p>"
};

const websiteUsabilityForm = {
  id: 'websiteUsabilityForm',
  name: "Website Usability Form",
  json: websiteUsabilityFormJson,
  createdAt: "2025-01-01T00:00:00.000Z",
  updatedAt: "2025-01-01T00:00:00.000Z"
};

export default websiteUsabilityForm;