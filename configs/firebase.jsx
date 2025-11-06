// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage }from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-marketplace-4a994.firebaseapp.com",
  projectId: "car-marketplace-4a994",
  storageBucket: "car-marketplace-4a994.appspot.com", // ✅ FIXED
  messagingSenderId: "294157499082",
  appId: "1:294157499082:web:cc13b4cec058c1e0b85233",
  measurementId: "G-6QE79C1BLD"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);