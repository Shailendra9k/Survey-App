import React, { Component } from "react";
// import firebase from "./Firebase";
import { firebase } from "firebase/app";

let uuid;

class Survey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: uuid,
      studentName: "",
      answers: {
        answer1: "",
        answer2: "",
        answer3: ""
      },
      isSubmitted: false
    };
    this.nameSubmit = this.nameSubmit.bind(this);
  }
  nameSubmit(event) {
    var studentName = this.refs.name.nodeValue;
    this.setState({ student: studentName }, function() {
      console.log(this.state);
    });
  }

  render() {
    var questions;

    if (this.state.studentName === " " && this.state.isSubmitted === false) {
      var studentName = (
        <div>
          <h1>Hey Student, please let us your name:</h1>
          <form onSubmit={this.nameSubmit}>
            <input
              className="namy"
              type="text"
              placeholder="Enter your name"
              ref="name"
            />
          </form>
        </div>
      );
    }

    return (
      <div>
        {studentName}
        -------------------------------------------------
        {questions}
      </div>
    );
  }
}
export default Survey;
