const volunteerSignUpFormJson = {
  "title": "Volunteer Sign-Up Form",
  "description": "Join our community of volunteers and make a difference!",
  "pages": [
    {
      "name": "personal_info",
      "title": "Personal Information",
      "elements": [
        {
          "type": "text",
          "name": "first_name",
          "title": "First Name",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "last_name",
          "title": "Last Name",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "email",
          "title": "Email Address",
          "isRequired": true,
          "inputType": "email",
          "validators": [
            {
              "type": "email"
            }
          ]
        },
        {
          "type": "text",
          "name": "phone",
          "title": "Phone Number",
          "isRequired": true,
          "inputType": "tel"
        },
        {
          "type": "text",
          "name": "date_of_birth",
          "title": "Date of Birth",
          "isRequired": true,
          "inputType": "date"
        },
        {
          "type": "multipletext",
          "name": "address",
          "title": "Address",
          "isRequired": true,
          "items": [
            {
              "name": "street",
              "title": "Street Address"
            },
            {
              "name": "city",
              "title": "City"
            },
            {
              "name": "state",
              "title": "State"
            },
            {
              "name": "zip",
              "title": "ZIP Code"
            }
          ]
        }
      ]
    },
    {
      "name": "volunteer_interests",
      "title": "Volunteer Interests",
      "elements": [
        {
          "type": "checkbox",
          "name": "volunteer_areas",
          "title": "Which volunteer areas interest you most? (Select all that apply)",
          "isRequired": true,
          "choices": [
            { "value": "education", "text": "Education & Tutoring" },
            { "value": "environment", "text": "Environmental Conservation" },
            { "value": "elderly", "text": "Elderly Care & Support" },
            { "value": "youth", "text": "Youth Programs" },
            { "value": "animals", "text": "Animal Welfare" },
            { "value": "food_services", "text": "Food Services & Distribution" }
          ]
        },
        {
          "type": "comment",
          "name": "special_skills",
          "title": "Do you have any special skills or experience you'd like to share?"
        }
      ]
    },
    {
      "name": "availability",
      "title": "Availability",
      "elements": [
        {
          "type": "checkbox",
          "name": "available_days",
          "title": "Which days are you generally available?",
          "isRequired": true,
          "choices": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
          ]
        },
        {
          "type": "text",
          "name": "preferred_time",
          "title": "Preferred time of day (e.g. mornings, afternoons, evenings)"
        }
      ]
    },
    {
      "name": "confirmation",
      "title": "Confirmation",
      "elements": [
        {
          "type": "boolean",
          "name": "agree_terms",
          "title": "I agree to the terms and conditions.",
          "isRequired": true
        }
      ]
    }
  ]
};
const volunteerSignUpForm = {
  id: 'volunteerSignUpForm',
  name: "Volunteer Sign Up Form",
  json: volunteerSignUpFormJson,
  createdAt: "2025-01-01T00:00:00.000Z",
  updatedAt: "2025-01-01T00:00:00.000Z"
};

export default volunteerSignUpForm;