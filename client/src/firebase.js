// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2fc03.firebaseapp.com",
  projectId: "mern-estate-2fc03",
  storageBucket: "mern-estate-2fc03.appspot.com",
  messagingSenderId: "90281977007",
  appId: "1:90281977007:web:70fb66b2f44f647809e05a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);