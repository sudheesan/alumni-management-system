// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyApxDsOCOaGgVU2Juiqh6TiYlCYupUjEI0",
  authDomain: "miu-amp-3c44d.firebaseapp.com",
  projectId: "miu-amp-3c44d",
  storageBucket: "miu-amp-3c44d.appspot.com",
  messagingSenderId: "590766648589",
  appId: "1:590766648589:web:4c4bf40f12f33211fa1444",
  measurementId: "G-NHGFE4EXWE"
};

// Initialize the Firebase app in the service worker by passing the generated config

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
