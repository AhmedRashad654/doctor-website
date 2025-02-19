import { countries } from "./country";
import { EditProfileField } from "./Types";

export const navbarLinks = [
  { name: "Home", path: "/" },
  {
    name: "Appointment",
    path: "/appointment?category=approve",
    active: "/appointment",
  },
  { name: "Quizzes", path: "/quizzes" },
  { name: "Companies", path: "/companies" },
  { name: "Med Clips", path: "/medClips" },
];

export const EditProfiles: EditProfileField[] = [
  {
    text: "Full Name",
    name: "name",
    type: "text",
  },
  {
    text: "Age",
    name: "age",
    type: "number",
  },
  {
    text: "Mobile",
    name: "mobile",
    type: "number",
  },
  {
    text: "bio",
    name: "bio",
    type: "text",
  },
  {
    text: "Gender",
    name: "gender",
    type: "select",
    option: [
      { name_en: "Male", name_ar: "ذكر" },

      { name_en: "Female", name_ar: "انثي" },
    ],
  },
  {
    text: "Country",
    name: "country",
    type: "select",
    option: countries,
  },
] as const;
export const FakeQuestion = [
  {
    question:
      "In the past two weeks, have you felt excessive anxiety or stress that has affected your daily life?",
    answers: [
      "Yes, almost every day",
      "Yes, almost every day",
      "Yes, almost every day",
      "Yes, almost every day",
    ],
  },
  {
    question:
      "In the past two weeks, have you felt excessive anxiety or stress that has affected your daily life?",
    answers: [
      "Yes, sometimes, but I can manage it",
      "Yes, sometimes, but I can manage it",
      "Yes, sometimes, but I can manage it",
      "Yes, sometimes, but I can manage it",
    ],
  },
  {
    question:
      "In the past two weeks, have you felt excessive anxiety or stress that has affected your daily life?",
    answers: [
      "I rarely feel that way",
      "I rarely feel that way",
      "I rarely feel that way",
      "I rarely feel that way",
    ],
  },
  {
    question:
      "In the past two weeks, have you felt excessive anxiety or stress that has affected your daily life?",
    answers: [
      "No, I do not feel anxiouis",
      "No, I do not feel anxiouis",
      "No, I do not feel anxiouis",
      "No, I do not feel anxiouis",
    ],
  },
];
