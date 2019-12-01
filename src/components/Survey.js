import React, { Component } from "react";

let firebase = require("firebase");
let uuid = require("uuid");

var firebaseConfig = {
  apiKey: "AIzaSyCtgrXvvGlQhN0jcOivqfTb1vo2XunzRNc",
  authDomain: "usurvey-9959d.firebaseapp.com",
  databaseURL: "https://usurvey-9959d.firebaseio.com",
  projectId: "usurvey-9959d",
  storageBucket: "usurvey-9959d.appspot.com",
  messagingSenderId: "959721635995",
  appId: "1:959721635995:web:8d414c644d26b879a6863e",
  measurementId: "G-K7J9MQ3NVC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

class Survey extends Component {
  render() {
    return (
      <div>
        <h1>I am from survey component.</h1>
      </div>
    );
  }
}
export default Survey;
