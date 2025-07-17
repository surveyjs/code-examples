const courseEvaluationForm = {
  "title": "Course Evaluation Form",
  "description": "Please provide your feedback on this course to help us improve",
  "pages": [
    {
      "name": "course_info",
      "title": "Course Information",
      "elements": [
        {
          "type": "text",
          "name": "course_name",
          "title": "Course Name",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "instructor_name",
          "title": "Instructor Name",
          "isRequired": true
        },
        {
          "type": "dropdown",
          "name": "semester",
          "title": "Semester",
          "isRequired": true,
          "choices": [
            { "value": "fall_2024", "text": "Fall 2024" },
            { "value": "spring_2024", "text": "Spring 2024" },
            { "value": "summer_2024", "text": "Summer 2024" },
            { "value": "fall_2023", "text": "Fall 2023" }
          ]
        },
        {
          "type": "radiogroup",
          "name": "student_level",
          "title": "Your academic level",
          "choices": [
            { "value": "freshman", "text": "Freshman" },
            { "value": "sophomore", "text": "Sophomore" },
            { "value": "junior", "text": "Junior" },
            { "value": "senior", "text": "Senior" },
            { "value": "graduate", "text": "Graduate Student" }
          ]
        }
      ]
    },
    {
      "name": "course_content",
      "title": "Course Content & Structure",
      "elements": [
        {
          "type": "matrix",
          "name": "course_ratings",
          "title": "Please rate the following aspects of the course:",
          "isRequired": true,
          "columns": [
            { "value": "excellent", "text": "Excellent" },
            { "value": "good", "text": "Good" },
            { "value": "fair", "text": "Fair" },
            { "value": "poor", "text": "Poor" }
          ],
          "rows": [
            { "value": "course_content", "text": "Course content quality" },
            { "value": "course_organization", "text": "Course organization" },
            { "value": "workload", "text": "Appropriate workload" },
            { "value": "assignments", "text": "Assignments relevance" },
            { "value": "materials", "text": "Course materials" }
          ]
        },
        {
          "type": "rating",
          "name": "difficulty_level",
          "title": "How would you rate the difficulty level of this course?",
          "rateMin": 1,
          "rateMax": 5,
          "minRateDescription": "Too Easy",
          "maxRateDescription": "Too Difficult"
        },
        {
          "type": "radiogroup",
          "name": "pace",
          "title": "The pace of the course was:",
          "choices": [
            { "value": "too_slow", "text": "Too slow" },
            { "value": "just_right", "text": "Just right" },
            { "value": "too_fast", "text": "Too fast" }
          ]
        }
      ]
    },
    {
      "name": "instructor_evaluation",
      "title": "Instructor Evaluation",
      "elements": [
        {
          "type": "matrix",
          "name": "instructor_ratings",
          "title": "Please rate the instructor on the following:",
          "isRequired": true,
          "columns": [
            { "value": "excellent", "text": "Excellent" },
            { "value": "good", "text": "Good" },
            { "value": "fair", "text": "Fair" },
            { "value": "poor", "text": "Poor" }
          ],
          "rows": [
            { "value": "knowledge", "text": "Knowledge of subject matter" },
            { "value": "teaching_effectiveness", "text": "Teaching effectiveness" },
            { "value": "communication", "text": "Communication skills" },
            { "value": "availability", "text": "Availability for help" },
            { "value": "feedback", "text": "Feedback on assignments" }
          ]
        },
        {
          "type": "comment",
          "name": "instructor_comments",
          "title": "Additional comments about the instructor:",
          "rows": 3
        }
      ]
    },
    {
      "name": "overall_feedback",
      "title": "Overall Assessment",
      "elements": [
        {
          "type": "rating",
          "name": "overall_rating",
          "title": "Overall course rating",
          "isRequired": true,
          "rateMin": 1,
          "rateMax": 5,
          "minRateDescription": "Poor",
          "maxRateDescription": "Excellent"
        },
        {
          "type": "boolean",
          "name": "recommend_course",
          "title": "Would you recommend this course to other students?",
          "isRequired": true
        },
        {
          "type": "comment",
          "name": "improvements",
          "title": "What improvements would you suggest for this course?",
          "rows": 4
        },
        {
          "type": "comment",
          "name": "best_aspects",
          "title": "What were the best aspects of this course?",
          "rows": 3
        }
      ]
    }
  ],
  "showProgressBar": "bottom",
  "showQuestionNumbers": "onPage",
  "completeText": "Submit Evaluation",
  "completedHtml": "<h3>Thank you for your feedback!</h3><p>Your evaluation has been submitted and will help improve future courses.</p>"
};

const courseEvaluationSurvey = {
  id: 'courseEvaluationForm',
  name: "Course Evaluation Form",
  json: courseEvaluationForm,
  createdAt: "2023-01-01T00:00:00.000Z",
  updatedAt: "2023-01-01T00:00:00.000Z"
};

export default courseEvaluationSurvey;
