import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCtgrXvvGlQhN0jcOivqfTb1vo2XunzRNc",
  authDomain: "usurvey-9959d.firebaseapp.com",
  databaseURL: "https://usurvey-9959d.firebaseio.com",
  projectId: "usurvey-9959d",
  storageBucket: "usurvey-9959d.appspot.com",
  messagingSenderId: "959721635995",
  appId: "1:959721635995:web:f4c99024dd98d4a7a6863e",
  measurementId: "G-WQZRZFX70B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export default firebase;
