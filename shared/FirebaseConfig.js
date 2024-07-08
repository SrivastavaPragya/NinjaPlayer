// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC_cpeVVqBgryZbiuh-EDsnMS3HWVta40",
  authDomain: "ninjaplayer-771cc.firebaseapp.com",
  projectId: "ninjaplayer-771cc",
  storageBucket: "ninjaplayer-771cc.appspot.com",
  messagingSenderId: "738462442627",
  appId: "1:738462442627:web:13bf8d15296d78e2e827b6",
  measurementId: "G-PG5BQQ7Z9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (typeof window !== "undefined") {
    const analytics = getAnalytics(app);
  }