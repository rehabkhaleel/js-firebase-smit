import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you needS
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOAdF4QylT7FNCRHlpGZa_QwlX7XghBMU",
  authDomain: "chatapp-f0146.firebaseapp.com",
  projectId: "chatapp-f0146",
  storageBucket: "chatapp-f0146.appspot.com",
  messagingSenderId: "830952834028",
  appId: "1:830952834028:web:fb18e851f1c1919d04b6c9",
  measurementId: "G-CF0MNY9595"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
