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
  //Methods created for handling events:
  nameSubmit(event) {
    var studentName = this.refs.name.value;
    this.setState({ studentName: studentName }, function() {
      console.log(this.state);
    });
  }

  answerSelected() {
    // work on thiis
  }
  questionSubmit() {
    //Work on this
  }

  constructor(props) {
    super(props);

    this.state = {
      uid: uuid.v1(),
      studentName: "Shailendra",
      answers: {
        answer1: "",
        answer2: "",
        answer3: ""
      },
      isSubmitted: false
    };
    this.nameSubmit = this.nameSubmit.bind(this);
    this.answerSelected = this.answerSelected.bind(this);
    this.questionSubmit = this.questionSubmit.bind(this);
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
      questions = (
        <div>
          <h2>Here are some questions:</h2>
          <form onSubmit={this.questionSubmit}>
            <div className="card">
              <label>What kind of courses you like most?</label> <br />
              <input
                type="radio"
                name="answer1"
                value="Technology"
                onChange={this.answerSelected}
              />
              Technology
              <input
                type="radio"
                name="answer1"
                value="Design"
                onChange={this.answerSelected}
              />
              Design
              <input
                type="radio"
                name="answer1"
                value="Marketing"
                onChange={this.answerSelected}
              />
              Marketing
            </div>
            <div className="card">
              <label>You are a:</label> <br />
              <input
                type="radio"
                name="answer2"
                value="Student"
                onChange={this.answerSelected}
              />
              Student
              <input
                type="radio"
                name="answer2"
                value="Employed"
                onChange={this.answerSelected}
              />
              Employed
              <input
                type="radio"
                name="answer2"
                value="Seeking job"
                onChange={this.answerSelected}
              />
              Seeking job
            </div>
            <div className="card">
              <label>Is online learning helpful:</label> <br />
              <input
                type="radio"
                name="answer3"
                value="Yes"
                onChange={this.answerSelected}
              />
              Yes
              <input
                type="radio"
                name="answer3"
                value="No"
                onChange={this.answerSelected}
              />
              No
              <input
                type="radio"
                name="answer3"
                value="May be"
                onChange={this.answerSelected}
              />
              May be
            </div>
            <input className="feedback-button" type="submit" value="submit" />
          </form>
        </div>
      );
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
