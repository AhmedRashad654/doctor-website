// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAllqA7HUOycsEmsdLW_lhAS6yQ3G4o2Ow",
  authDomain: "doctor-patient-9c4e2.firebaseapp.com",
  projectId: "doctor-patient-9c4e2",
  storageBucket: "doctor-patient-9c4e2.firebasestorage.app",
  messagingSenderId: "31997538947",
  appId: "1:31997538947:web:02954369d0b2eab09ea1b6",
  measurementId: "G-BC2RS5QJGX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { app, messaging };
