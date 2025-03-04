importScripts(
  "https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.10.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyAllqA7HUOycsEmsdLW_lhAS6yQ3G4o2Ow",
  authDomain: "doctor-patient-9c4e2.firebaseapp.com",
  projectId: "doctor-patient-9c4e2",
  storageBucket: "doctor-patient-9c4e2.firebasestorage.app",
  messagingSenderId: "31997538947",
  appId: "1:31997538947:web:02954369d0b2eab09ea1b6",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
