// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj88ytS6HufSXev4FayvsWC-LAwypAK4o",
  authDomain: "minslearning-8a089.firebaseapp.com",
  projectId: "minslearning-8a089",
  storageBucket: "minslearning-8a089.firebasestorage.app",
  messagingSenderId: "998636504654",
  appId: "1:998636504654:web:f8f6984befb563c322251f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)