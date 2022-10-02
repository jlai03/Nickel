// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi2E_rL6vkSu_wEz2kSXkyzGY-hdOPAVY",
  authDomain: "nickel-3478d.firebaseapp.com",
  projectId: "nickel-3478d",
  storageBucket: "nickel-3478d.appspot.com",
  messagingSenderId: "489472018202",
  appId: "1:489472018202:web:9919b732a4d53f9b9ecea3",
  measurementId: "G-FC3ZE1WP48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);

