// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getMessaging, getToken, onMessage } from "firebase/messaging";
import { getStorage } from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApxDsOCOaGgVU2Juiqh6TiYlCYupUjEI0",
  authDomain: "miu-amp-3c44d.firebaseapp.com",
  projectId: "miu-amp-3c44d",
  storageBucket: "miu-amp-3c44d.appspot.com",
  messagingSenderId: "590766648589",
  appId: "1:590766648589:web:4c4bf40f12f33211fa1444",
  measurementId: "G-NHGFE4EXWE"
};


const vapidKey = 'BO7PUWzDi8Acf4l62bn2cIJot0354lCzJEkJQT10Cj4hWwV2Xn9KoHOLdg8lPvxIWSJrjaVec0Ay0ZNZL0O_xyU';

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
