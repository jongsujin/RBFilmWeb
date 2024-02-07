/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWhnjcq4vA6KClwKYsfFCf9XzJKjJ0TZc",
  authDomain: "rbfilm-6002a.firebaseapp.com",
  projectId: "rbfilm-6002a",
  storageBucket: "rbfilm-6002a.appspot.com",
  messagingSenderId: "592710761547",
  appId: "1:592710761547:web:7219eecc182a34172961ce",
  measurementId: "G-2XYXD9XRPE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
