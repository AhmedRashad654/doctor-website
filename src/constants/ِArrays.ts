import { countries } from "./country";
import { EditProfileField } from "./Types";

export const navbarLinks = [
  { name: "Home", path: "/" },
  {
    name: "Appointment",
    path: "/appointment?category=pending",
    active: "/appointment",
  },
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

export const InputStripe = [
  {
    label: "Card Number",
    componant: "CardNumberElement",
  },
  {
    label: "Expiry Date",
    componant: "CardExpiryElement",
  },
  {
    label: "CVC",
    componant: "CardCvcElement",
  },
];
