//import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr0mOIzr7b04qBuAKmWg2zcVWey2B9LN4",
  authDomain: "e-challenge-b8234.firebaseapp.com",
  projectId: "e-challenge-b8234",
  storageBucket: "e-challenge-b8234.appspot.com",
  messagingSenderId: "776418552112",
  appId: "1:776418552112:web:eda06151bce77b1c1c40f5",
  measurementId: "G-9ENDLC678C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
