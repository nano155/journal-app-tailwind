// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8RjW_SlWDofBwaq86mJi8MtyHrhjNtE4",
  authDomain: "journal-app-a1494.firebaseapp.com",
  projectId: "journal-app-a1494",
  storageBucket: "journal-app-a1494.appspot.com",
  messagingSenderId: "725551161149",
  appId: "1:725551161149:web:67256d39ba5a0856db6f54",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
