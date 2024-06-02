// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGq7w6Ngm7bIBOtdB0bXXur4upVbHX4fw",
  authDomain: "tranquil-travels-422ccc.firebaseapp.com",
  projectId: "tranquil-travels-422ccc",
  storageBucket: "tranquil-travels-422ccc.appspot.com",
  messagingSenderId: "438275805622",
  appId: "1:438275805622:web:07c6d7033fb39774fcf117"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);