// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
//TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANbchi7pcHIn7Bq6u-IHmVRgfTHzpC1lo",
  authDomain: "movie-flix-2500f.firebaseapp.com",
  projectId: "movie-flix-2500f",
  storageBucket: "movie-flix-2500f.appspot.com",
  messagingSenderId: "965856999591",
  appId: "1:965856999591:web:c22ab9e746c0d0e8524382",
  measurementId: "G-L75WP49J24",
  signInFlow: 'popup', // default is 'redirect'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();