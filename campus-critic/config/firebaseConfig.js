import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Constants from "expo-constants";
import { getFirestore } from "firebase/firestore";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDWsP6G0HcecfsDyY9wTZpAjLsAFgV1ZA4",
  authDomain: "campus-critic.firebaseapp.com",
  projectId: "campus-critic",
  storageBucket: "campus-critic.appspot.com",
  messagingSenderId: "642430350313",
  appId: "1:642430350313:web:4264f5fc4943cd8938d178",
  measurementId: "G-6JBBHZLW4Q",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
