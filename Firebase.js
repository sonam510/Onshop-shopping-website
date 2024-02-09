// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdSpuHorhJ9L6R9N-ohBkJBozszzsZqNI",
  authDomain: "react-auth-a7d05.firebaseapp.com",
  projectId: "react-auth-a7d05",
  storageBucket: "react-auth-a7d05.appspot.com",
  messagingSenderId: "30895923300",
  appId: "1:30895923300:web:1b491ba667a6cc6e8cbf71",
  measurementId: "G-J4CQNB9D2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);