// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getStorage } from "firebase/storage"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW0tm3vM3Y2ygW05wYCPHk4X9Ylm-4kLE",
  authDomain: "coursesite-c840b.firebaseapp.com",
  projectId: "coursesite-c840b",
  storageBucket: "coursesite-c840b.appspot.com",
  messagingSenderId: "112587674989",
  appId: "1:112587674989:web:91dbbafebb83da5afe3664"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const imgDB = getStorage(app);

