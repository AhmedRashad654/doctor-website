import { Dayjs } from "dayjs";

export interface FakeQuestionType {
  question: string;
  answers: string[];
}
export interface Option {
  name_en: string;
  name_ar: string;
  code?: string;
}
export interface EditProfileField {
  text: string;
  name: string;
  type: "text" | "number" | "select";
  option?: Option[];
}
export interface FormDataEditProfile {
  name: string;
  age: string;
  mobile: string;
  bio: string;
  gender: string;
  country: string;
}
export interface UserState {
  _id: string;
  uniqueId: string;
  name: string;
  image: string;
  age: string;
  email: string;
  mobile: string;
  gender: string;
  bio: string;
  dob: string;
  analyticDate: string;
  isBlock: boolean;
  fcmToken: string;
  isDelete: boolean;
  isUpdate: boolean;
  latitude: string;
  longitude: string;
  country: string;
  // subPatient: any[];
  // doctors: any[];
  isBusy: boolean;
  isOnline: boolean;
  callId: string;
  loginType: string;
  createdAt: string;
  updatedAt: string;
}
export interface IServices {
  _id: string;
  status: boolean;
  isDelete: boolean;
  isDemo: boolean;
  subService: [];
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
export interface Schedule {
  day: string;
  startTime: string;
  endTime: string;
  breakStartTime: string;
  breakEndTime: string;
  timeSlot: number;
  isBreak: boolean;
  _id: string;
}
export interface Doctor {
  _id: string;
  uniqueId: number;
  name: string;
  image: string;
  email: string;
  password: string;
  age: number;
  mobile: string;
  gender: string;
  dob: string;
  countryCode: string;
  isBlock: boolean;
  fcmToken: string;
  isDelete: boolean;
  bookingCount: number;
  currentBookingCount: number;
  wallet: number;
  totalWallet: number;
  patients: number;
  service: [];
  charge: number;
  commission: number;
  designation: string;
  degree: string[];
  language: string[];
  experience: number;
  type: number;
  latitude: string;
  longitude: string;
  country: string;
  clinicName: string;
  address: string;
  awards: string[];
  expertise: string[];
  yourSelf: string;
  education: string;
  experienceDetails: string[];
  reviewCount: number;
  rating: number;
  timeSlot: number;
  isAttend: boolean;
  showDialog: boolean;
  isBusy: boolean;
  isOnline: boolean;
  callId: string;
  oneSignalId: string;
  schedule: Schedule[];
  createdAt: string;
  updatedAt: string;
  isSaved: boolean;
}
export interface IBestSpecialist {
  serviceId: string;
  serviceName: string;
  doctors: Doctor[];
}
export interface walletUser {
  amount: number;
}
export interface IWalletHistory {
  _id: string;
  user: string;
  wallet: string;
  amount: number;
  date: string;
  paymentGateway: number;
  type: number;
  couponId: string;
  uniqueId: string;
  time: string;
  createdAt: string;
  updatedAt: string;
  month: string;
}
export interface IDateDoctor {
  status: boolean;
  allSlot: {
    morning: string[];
    evening: string[];
  };
  busySlots: [];
  isOpen: boolean;
  isBreak: boolean;
  message: string;
}
export interface IStepsBooking {
  doctor: Doctor;
  selectedDate: Dayjs | null;
  selectedTime: string | null;
  currentDate: Date;
  availableTime: IDateDoctor;
  status: "idle" | "loading" | "succeeded" | "failed";
}
