import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div className="aboutMeContainer">
        <h1 className="aboutMeHeader">About Me</h1>
        <div className="aboutMeGrid">
          <div className="aboutMePicWrap">
            <div className="aboutMePic" />
          </div>
          <div className="aboutMeBio">
            <p>Lorem</p>
          </div>
        </div>
      </div>
    );
  }
}
