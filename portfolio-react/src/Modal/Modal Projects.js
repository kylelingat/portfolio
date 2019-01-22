import React, { Component } from "react";
import projectData from "../Projects Data/ProjectData.js";

export class HackSeaModal extends Component {
  state = {
    previous: "marvelApi",
    next: "haccEdu"
  };

  constructor(props) {
    super(props);
  }

  keyEventHandler = event => {
    event = event || window.event;
    var key = event.which || event.keyCode;
    if (key == 37) {
      this.props.modalContentHandler("previous", this.state.previous);
      console.log("test");
    } else if (key == 39) {
      this.props.modalContentHandler("next", this.state.next);
    }
  };

  mainImgBg = {
    backgroundImage: `url(${projectData.hackSeaInfo.mainImg})`
  };

  secondImgBg = {
    backgroundImage: `url(${projectData.hackSeaInfo.img2})`
  };

  thirdImgBg = {
    backgroundImage: `url(${projectData.hackSeaInfo.img3})`
  };

  render() {
    return (
      <div
        tabIndex="0"
        id="myModal"
        className="modal"
        onKeyDown={this.keyEventHandler.bind(this)}
      >
        <div className="modal-content">
          <div className="topBar">
            <h2 id="projName">{projectData.hackSeaInfo.title}</h2>
            <span onClick={this.props.infoClickHandler} className="close">
              &times;
            </span>
          </div>
          <div className="midModal">
            <div className="contentContainer">
              <div className="modalProjectImage" style={this.mainImgBg} />
              <p className="modalDescription">
                {projectData.hackSeaInfo.description}
              </p>
              <div className="modalProjectImage" style={this.secondImgBg} />
              <p className="modalDescription">
                {projectData.hackSeaInfo.description2}
              </p>
              <div className="modalProjectImage" style={this.thirdImgBg} />
              <p className="modalDescription">
                {projectData.hackSeaInfo.description3}
              </p>
            </div>
            <div className="bottomBar">
            <div className="modalSwitchContainer">
              <div
                className="previousSwitch"
                onClick={this.props.modalContentHandler.bind(
                  this,
                  "previous",
                  this.state.previous
                )}
              >
                Previous
              </div>
              <div
                className="nextSwitch"
                onClick={this.props.modalContentHandler.bind(
                  this,
                  "next",
                  this.state.next
                )}
              >
                Next
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export class HaccModal extends Component {
  state = {
    previous: "hackSea",
    next: "bluePlanet"
  };

  constructor(props) {
    super(props);
    console.log(props);
  }

  keyEventHandler = event => {
    event = event || window.event;
    var key = event.which || event.keyCode;
    if (key == 37) {
      this.props.modalContentHandler("previous", this.state.previous);
      console.log("test");
    } else if (key == 39) {
      this.props.modalContentHandler("next", this.state.next);
    }
  };

  mainImgBg = {
    backgroundImage: `url(${projectData.haccInfo.mainImg})`
  };

  render() {
    return (
      <div
        tabIndex="0"
        id="myModal"
        className="modal"
        onKeyDown={this.keyEventHandler.bind(this)}
      >
        <div className="modal-content">
          <div className="topBar">
            <h2 id="projName">{projectData.haccInfo.title}</h2>
            <span onClick={this.props.infoClickHandler} className="close">
              &times;
            </span>
          </div>
          <div className="midModal">
            <div className="contentContainer">
              <div className="modalProjectImage" style={this.mainImgBg} />
              <p className="modalDescription">
                {projectData.haccInfo.description}
              </p>
              <div className="modalSwitchContainer">
                <div
                  className="previousSwitch"
                  onClick={this.props.modalContentHandler.bind(
                    this,
                    "previous",
                    this.state.previous
                  )}
                >
                  Previous
                </div>
                <div
                  className="nextSwitch"
                  onClick={this.props.modalContentHandler.bind(
                    this,
                    "next",
                    this.state.next
                  )}
                >
                  Next
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class BPModal extends Component {
  state = {
    previous: "haccEdu",
    next: "marvelApi"
  };

  keyEventHandler = event => {
    event = event || window.event;
    var key = event.which || event.keyCode;
    if (key == 37) {
      this.props.modalContentHandler("previous", this.state.previous);
      console.log("test");
    } else if (key == 39) {
      this.props.modalContentHandler("next", this.state.next);
    }
  };

  mainImgBg = {
    backgroundImage: `url(${projectData.bluePlanetInfo.mainImg})`
  };

  secondImgBg = {
    backgroundImage: `url(${projectData.bluePlanetInfo.mainImg})`
  };

  render() {
    return (
      <div
        tabIndex="0"
        id="myModal"
        className="modal"
        onKeyDown={this.keyEventHandler.bind(this)}
      >
        <div className="modal-content">
          <div className="topBar">
            <h2 id="projName">{projectData.bluePlanetInfo.title}</h2>
            <span onClick={this.props.infoClickHandler} className="close">
              &times;
            </span>
          </div>
          <div className="midModal">
            <div className="contentContainer">
              <div className="modalProjectImage" style={this.mainImgBg} />
              <p className="modalDescription">
                {projectData.bluePlanetInfo.description}
              </p>
              <div className="modalSwitchContainer">
                <div
                  className="previousSwitch"
                  onClick={this.props.modalContentHandler.bind(
                    this,
                    "previous",
                    this.state.previous
                  )}
                >
                  Previous
                </div>
                <div
                  className="nextSwitch"
                  onClick={this.props.modalContentHandler.bind(
                    this,
                    "next",
                    this.state.next
                  )}
                >
                  Next
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class MarvelModal extends Component {
  state = {
    previous: "bluePlanet",
    next: "hackSea"
  };

  keyEventHandler = event => {
    event = event || window.event;
    var key = event.which || event.keyCode;
    if (key == 37) {
      this.props.modalContentHandler("previous", this.state.previous);
      console.log("test");
    } else if (key == 39) {
      this.props.modalContentHandler("next", this.state.next);
    }
  };

  mainImgBg = {
    backgroundImage: `url(${projectData.marvelApiInfo.mainImg})`
  };

  render() {
    return (
      <div
        tabIndex="0"
        id="myModal"
        className="modal"
        onKeyDown={this.keyEventHandler.bind(this)}
      >
        <div className="modal-content">
          <div className="topBar">
            <h2 id="projName">{projectData.marvelApiInfo.title}</h2>
            <span onClick={this.props.infoClickHandler} className="close">
              &times;
            </span>
          </div>
          <div className="midModal">
            <div className="contentContainer">
              <div className="modalProjectImage" style={this.mainImgBg} />
              <p className="modalDescription">
                {projectData.marvelApiInfo.description}
              </p>
              <div className="modalSwitchContainer">
                <div
                  className="previousSwitch"
                  onClick={this.props.modalContentHandler.bind(
                    this,
                    "previous",
                    this.state.previous
                  )}
                >
                  Previous
                </div>
                <div
                  className="nextSwitch"
                  onClick={this.props.modalContentHandler.bind(
                    this,
                    "next",
                    this.state.next
                  )}
                >
                  Next
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
