import React, { Component } from "react";
// import { firebase } from 'firebase/app';

var firebase = require("firebase");
var uuid = require("uuid");

var firebaseConfig = {
  apiKey: "AIzaSyCynhJ-fBgfhw2oc90Q8651qIucca_S10M",
  authDomain: "survey-989b5.firebaseapp.com",
  databaseURL: "https://survey-989b5.firebaseio.com",
  projectId: "survey-989b5",
  storageBucket: "survey-989b5.appspot.com",
  messagingSenderId: "441575900272",
  appId: "1:441575900272:web:2adab0158f6c30d21960b5",
  measurementId: "G-NTSKE4PPSW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

class Survey extends Component {
  nameSubmit(event) {
    var studentName = this.refs.name.value;
    this.setState({ studentName: studentName }, function() {
      console.log(this.state);
    });
  }
  constructor(props) {
    super(props);

    this.state = {
      uid: uuid.v1(),
      studentName: "shailendra",
      answers: {
        answer1: "",
        answer2: "",
        answer3: ""
      },
      isSubmitted: false
    };
    this.nameSubmit = this.nameSubmit.bind(this);
  }

  render() {
    var studentName;
    var questions;

    if (this.state.studentName === "" && this.state.isSubmitted === false) {
      studentName =
        ((
          <div>
            <h1>Hey Student, please let us know your name:</h1>
            <form onSubmit={this.nameSubmit}>
              <input
                className="namy"
                type="text"
                placeholder="Enter your name"
                ref="name"
              />
            </form>
          </div>
        ),
        (questions = ""));
    } else if (
      this.state.studentName !== "" &&
      this.state.isSubmitted === false
    ) {
      studentName = <h1>Welcome to Survey, {this.state.studentName}</h1>;
      questions = <p>How is going?</p>;
    }
    return (
      <div>
        {studentName}
        -------------------------------------
        {questions}
      </div>
    );
  }
}

export default Survey;
