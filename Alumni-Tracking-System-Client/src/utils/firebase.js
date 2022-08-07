// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getMessaging, getToken, onMessage } from "firebase/messaging";
import { getStorage } from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnbuhczjGc3DM2DRTO-FLmTPyhS55RCaw",
  authDomain: "miu-amp.firebaseapp.com",
  projectId: "miu-amp",
  storageBucket: "miu-amp.appspot.com",
  messagingSenderId: "1005835444660",
  appId: "1:1005835444660:web:f1958f5ebe93a1881992e1",
  measurementId: "G-DCH8HR8E0G"
};

const vapidKey = 'BAnwN1fa9L_F5TfUyQ_nqNk4UfreKLitwnrlAlAolw7GV-5GpXILt5ZMm0w4idQUbf_FTBTux1scaFfFvm2PGlw';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export const storage = getStorage(app);


export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

export const getFCMToken = (setToken) => {
  return getToken(messaging, {vapidKey: vapidKey}).then((currentToken) => {
    if (currentToken) {
      setToken(currentToken);
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setToken(null);
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
  });
}
