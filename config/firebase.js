// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH9wKH7DRjD6qWWE0YDwhuOj7_33CWqUs",
  authDomain: "styudy-rk-hcm.firebaseapp.com",
  projectId: "styudy-rk-hcm",
  storageBucket: "styudy-rk-hcm.appspot.com",
  messagingSenderId: "489550551778",
  appId: "1:489550551778:web:ab7e7057c4236d58091cbb",
  measurementId: "G-S62EEN52KN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);