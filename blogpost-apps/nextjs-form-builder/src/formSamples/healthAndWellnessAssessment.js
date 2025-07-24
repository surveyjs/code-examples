const healthWellnessFormJson = {
  "title": "Health and Wellness Assessment",
  "description": "This assessment will help us understand your current health status and wellness goals",
  "pages": [
    {
      "name": "basic_info",
      "title": "Basic Information",
      "elements": [
        {
          "type": "text",
          "name": "age",
          "title": "Age",
          "isRequired": true,
          "inputType": "number",
          "min": 18,
          "max": 120
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
          "type": "text",
          "name": "height",
          "title": "Height (in feet and inches, e.g., 5'8\")",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "weight",
          "title": "Weight (in pounds)",
          "isRequired": true,
          "inputType": "number"
        }
      ]
    },
    {
      "name": "health_status",
      "title": "Current Health Status",
      "elements": [
        {
          "type": "radiogroup",
          "name": "overall_health",
          "title": "How would you rate your overall health?",
          "isRequired": true,
          "choices": [
            { "value": "excellent", "text": "Excellent" },
            { "value": "very_good", "text": "Very Good" },
            { "value": "good", "text": "Good" },
            { "value": "fair", "text": "Fair" },
            { "value": "poor", "text": "Poor" }
          ]
        },
        {
          "type": "checkbox",
          "name": "health_conditions",
          "title": "Do you have any of the following health conditions? (Select all that apply)",
          "choices": [
            { "value": "diabetes", "text": "Diabetes" },
            { "value": "hypertension", "text": "High Blood Pressure" },
            { "value": "heart_disease", "text": "Heart Disease" },
            { "value": "arthritis", "text": "Arthritis" },
            { "value": "asthma", "text": "Asthma" },
            { "value": "depression", "text": "Depression/Anxiety" },
            { "value": "other", "text": "Other chronic condition" },
            { "value": "none", "text": "None of the above" }
          ]
        },
        {
          "type": "text",
          "name": "other_conditions",
          "title": "Please specify other health conditions:",
          "visibleIf": "{health_conditions} contains 'other'"
        },
        {
          "type": "checkbox",
          "name": "medications",
          "title": "Are you currently taking any medications?",
          "choices": [
            { "value": "prescription", "text": "Prescription medications" },
            { "value": "over_counter", "text": "Over-the-counter medications" },
            { "value": "supplements", "text": "Vitamins/Supplements" },
            { "value": "none", "text": "None" }
          ]
        }
      ]
    },
    {
      "name": "lifestyle",
      "title": "Lifestyle & Habits",
      "elements": [
        {
          "type": "radiogroup",
          "name": "exercise_frequency",
          "title": "How often do you exercise?",
          "isRequired": true,
          "choices": [
            { "value": "daily", "text": "Daily" },
            { "value": "4-6_times_week", "text": "4-6 times per week" },
            { "value": "2-3_times_week", "text": "2-3 times per week" },
            { "value": "once_week", "text": "Once per week" },
            { "value": "rarely", "text": "Rarely" },
            { "value": "never", "text": "Never" }
          ]
        },
        {
          "type": "checkbox",
          "name": "exercise_types",
          "title": "What types of exercise do you do? (Select all that apply)",
          "choices": [
            { "value": "cardio", "text": "Cardio (running, cycling, etc.)" },
            { "value": "strength", "text": "Strength training" },
            { "value": "yoga", "text": "Yoga/Pilates" },
            { "value": "sports", "text": "Sports" },
            { "value": "walking", "text": "Walking" },
            { "value": "swimming", "text": "Swimming" },
            { "value": "other", "text": "Other" }
          ],
          "visibleIf": "{exercise_frequency} != 'never'"
        },
        {
          "type": "radiogroup",
          "name": "sleep_hours",
          "title": "How many hours of sleep do you get per night on average?",
          "isRequired": true,
          "choices": [
            { "value": "less_than_5", "text": "Less than 5 hours" },
            { "value": "5-6", "text": "5-6 hours" },
            { "value": "7-8", "text": "7-8 hours" },
            { "value": "9-10", "text": "9-10 hours" },
            { "value": "more_than_10", "text": "More than 10 hours" }
          ]
        },
        {
          "type": "radiogroup",
          "name": "smoking_status",
          "title": "Smoking status",
          "choices": [
            { "value": "never", "text": "Never smoked" },
            { "value": "former", "text": "Former smoker" },
            { "value": "current", "text": "Current smoker" }
          ]
        },
        {
          "type": "radiogroup",
          "name": "alcohol_consumption",
          "title": "How often do you consume alcohol?",
          "choices": [
            { "value": "never", "text": "Never" },
            { "value": "rarely", "text": "Rarely" },
            { "value": "monthly", "text": "Monthly" },
            { "value": "weekly", "text": "Weekly" },
            { "value": "daily", "text": "Daily" }
          ]
        }
      ]
    },
    {
      "name": "wellness_goals",
      "title": "Wellness Goals",
      "elements": [
        {
          "type": "checkbox",
          "name": "health_goals",
          "title": "What are your primary health and wellness goals? (Select all that apply)",
          "isRequired": true,
          "choices": [
            { "value": "weight_loss", "text": "Weight loss" },
            { "value": "weight_gain", "text": "Weight gain" },
            { "value": "improve_fitness", "text": "Improve fitness level" },
            { "value": "build_muscle", "text": "Build muscle" },
            { "value": "reduce_stress", "text": "Reduce stress" },
            { "value": "better_sleep", "text": "Better sleep quality" },
            { "value": "quit_smoking", "text": "Quit smoking" },
            { "value": "healthy_eating", "text": "Improve eating habits" },
            { "value": "manage_condition", "text": "Manage health condition" },
            { "value": "preventive_care", "text": "Focus on preventive care" }
          ]
        },
        {
          "type": "matrix",
          "name": "barrier_assessment",
          "title": "How much do the following factors prevent you from achieving your health goals?",
          "columns": [
            { "value": "major_barrier", "text": "Major Barrier" },
            { "value": "minor_barrier", "text": "Minor Barrier" },
            { "value": "not_barrier", "text": "Not a Barrier" }
          ],
          "rows": [
            { "value": "time", "text": "Lack of time" },
            { "value": "motivation", "text": "Lack of motivation" },
            { "value": "knowledge", "text": "Lack of knowledge" },
            { "value": "cost", "text": "Financial constraints" },
            { "value": "support", "text": "Lack of support" },
            { "value": "access", "text": "Limited access to facilities" }
          ]
        },
        {
          "type": "comment",
          "name": "additional_comments",
          "title": "Any additional comments or concerns about your health and wellness?",
          "rows": 4
        }
      ]
    }
  ],
  "showProgressBar": "top",
  "showQuestionNumbers": "on",
  "completeText": "Complete Assessment",
  "completedHtml": "<h3>Assessment Complete!</h3><p>Thank you for completing the health and wellness assessment. Your responses will help us provide you with personalized recommendations.</p>"
};

const healthWellnessForm = {
  id: 'healthWellnessForm',
  name: "Health and Wellness Survey",
  json: healthWellnessFormJson,
  createdAt: "2025-01-01T00:00:00.000Z",
  updatedAt: "2025-01-01T00:00:00.000Z"
};

export default healthWellnessForm;