export const PROFILE_FORM_DATA = [
  {
    name: "name",
    placeholder: "Enter your full name",
    type: "text",
    label: "Full name",
  },
  {
    name: "email",
    placeholder: "example@youremail.com",
    type: "email",
    label: "Email",
  },
  {
    name: "linkedIn",
    placeholder: "https://linkedin.com/in/account",
    type: "text",
    label: "LinkedIn Link",
  },
];

export const EXPERIENCE_FORM_DATA = [
  {
    label: "Job Title",
    name: "title",
    placeholder: "Enter your job title",
    type: "text",
    required: true,
  },
  {
    label: "Company",
    name: "company",
    placeholder: "Enter the company name",
    type: "text",
    required: true,
  },
  {
    label: "Location",
    name: "location",
    placeholder: "City, Country",
    type: "text",
    required: true,
  },
  {
    label: "Description",
    placeholder: "Enter description",
    name: "description",
    type: "text",
    required: true,
  },
  {
    label: "Start Date",
    name: "startDate",
    placeholder: "DD/MM/YY",
    type: "date",
    required: true,
  },
  {
    label: "End Date",
    name: "endDate",
    placeholder: "DD/MM/YY",
    type: "date",
    required: false,
  },
];

export const EDUCATION_FORM_DATA = [
  {
    label: "School Name",
    name: "school",
    placeholder: "Enter your school name",
    type: "text",
  },
  {
    label: "Degree",
    name: "degree",
    placeholder: "Enter your degree",
    type: "text",
  },
  {
    label: "Enter your field of study",
    name: "fieldOfStudy",
    placeholder: "Enter your school name",
    type: "text",
  },
];
