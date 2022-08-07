// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyAnbuhczjGc3DM2DRTO-FLmTPyhS55RCaw",
  authDomain: "miu-amp.firebaseapp.com",
  projectId: "miu-amp",
  storageBucket: "miu-amp.appspot.com",
  messagingSenderId: "1005835444660",
  appId: "1:1005835444660:web:f1958f5ebe93a1881992e1",
  measurementId: "G-DCH8HR8E0G"
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
