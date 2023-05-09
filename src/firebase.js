import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbWajfPbKMSDEZMP8Kgr8VqbuHkG_QzqA",
  authDomain: "chirp-d3ba1.firebaseapp.com",
  projectId: "chirp-d3ba1",
  storageBucket: "chirp-d3ba1.appspot.com",
  messagingSenderId: "130626107545",
  appId: "1:130626107545:web:c272be1d5b95a774f52008",
  measurementId: "G-D36KHD8JPF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
