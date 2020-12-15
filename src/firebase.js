import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB52Ppcnf8onVSKKSbm6y76PuiGqFttoN8",
  authDomain: "portfolio-662d6.firebaseapp.com",
  projectId: "portfolio-662d6",
  storageBucket: "portfolio-662d6.appspot.com",
  messagingSenderId: "598986696141",
  appId: "1:598986696141:web:472905eefc7cb1fafa9084",
  measurementId: "G-T7PH9D10DG",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
