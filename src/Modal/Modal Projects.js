import React, { Component } from "react";
import projectData from "../Projects Data/ProjectData.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
library.add(faArrowLeft, faArrowRight, faArrowAltCircleUp);

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

  mainImg = {
    backgroundImage: `url(${projectData.hackSeaInfo.mainImg})`
  };

  img2 = {
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
        <div className="modalBody" onClick={this.props.infoClickHandler} />
        <div className="modal-content">
          <div className="topBar">
            <h2 id="projName">{projectData.hackSeaInfo.title}</h2>
            <span onClick={this.props.infoClickHandler} className="close">
              <p>&times;</p>
            </span>
          </div>
          <div className="midModal">
            <div id="topAnchor" className="contentContainer">
              <div className="modalProjectImage" style={this.mainImg} />
              <p className="modalDescription">
                {projectData.hackSeaInfo.description}
              </p>
              <div className="modalProjectImage" style={this.img2} />
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
                  <div className="buttonArrowIcon">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </div>
                  <p>Previous</p>
                </div>
                <div className="backTopSwitch">
                  <a href="#topAnchor">
                    <FontAwesomeIcon icon={faArrowAltCircleUp} />
                  </a>
                </div>
                <div
                  className="nextSwitch"
                  onClick={this.props.modalContentHandler.bind(
                    this,
                    "next",
                    this.state.next
                  )}
                >
                  <p>Next</p>
                  <div className="buttonArrowIcon">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
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

  mainImg = {
    backgroundImage: `url(${projectData.haccInfo.mainImg})`
  };

  img2 = {
    backgroundImage: `url(${projectData.haccInfo.img2})`
  };

  img3 = {
    backgroundImage: `url(${projectData.haccInfo.img3})`
  };

  render() {
    return (
      <div
        tabIndex="0"
        id="myModal"
        className="modal"
        onKeyDown={this.keyEventHandler.bind(this)}
      >
        <div className="modalBody" onClick={this.props.infoClickHandler} />
        <div className="modal-content">
          <div className="topBar">
            <h2 id="projName">{projectData.haccInfo.title}</h2>
            <span onClick={this.props.infoClickHandler} className="close">
              <p>&times;</p>
            </span>
          </div>
          <div className="midModal">
            <div id="topAnchor" className="contentContainer">
              <div className="modalProjectImage" style={this.mainImg} />
              <p className="modalDescription">
                {projectData.haccInfo.description}
              </p>
              <div className="modalProjectImage" style={this.img2} />
              <p className="modalDescription">
                {projectData.haccInfo.description2}
              </p>
              <div className="modalProjectImage" style={this.img3} />
              <p className="modalDescription">
                {projectData.haccInfo.description3}
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
                  <div className="buttonArrowIcon">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </div>
                  <p>Previous</p>
                </div>
                <div className="backTopSwitch">
                  <a href="#topAnchor">
                    <FontAwesomeIcon icon={faArrowAltCircleUp} />
                  </a>
                </div>
                <div
                  className="nextSwitch"
                  onClick={this.props.modalContentHandler.bind(
                    this,
                    "next",
                    this.state.next
                  )}
                >
                  <p>Next</p>
                  <div className="buttonArrowIcon">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
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

  mainImg = {
    backgroundImage: `url(${projectData.bluePlanetInfo.mainImg})`
  };

  img2 = {
    backgroundImage: `url(${projectData.bluePlanetInfo.img2})`
  };

  img3 = {
    backgroundImage: `url(${projectData.bluePlanetInfo.img3})`
  };

  img4 = {
    backgroundImage: `url(${projectData.bluePlanetInfo.img4})`
  };

  img5 = {
    backgroundImage: `url(${projectData.bluePlanetInfo.img5})`
  };


  render() {
    return (
      <div
        tabIndex="0"
        id="myModal"
        className="modal"
        onKeyDown={this.keyEventHandler.bind(this)}
      >
        <div className="modalBody" onClick={this.props.infoClickHandler} />
        <div className="modal-content">
          <div className="topBar">
            <h2 id="projName">{projectData.bluePlanetInfo.title}</h2>
            <span onClick={this.props.infoClickHandler} className="close">
              <p>&times;</p>
            </span>
          </div>
          <div className="midModal">
            <div id="topAnchor" className="contentContainer">
              <div className="modalProjectImage" style={this.mainImg} />
              <p className="modalDescription">
                {projectData.bluePlanetInfo.description}
              </p>
              <div className="modalProjectImage" style={this.img2} />
              <p className="modalDescription">
                {projectData.bluePlanetInfo.desc2}
              </p>
              <div className="modalProjectImage" style={this.img3} />
              <p className="modalDescription">
                {projectData.bluePlanetInfo.desc3}
              </p>
              <div className="modalProjectImage" style={this.img4} />
              <p className="modalDescription">
                {projectData.bluePlanetInfo.desc4}
              </p>
              <div className="modalProjectImage" style={this.img5} />
              <p className="modalDescription">
                {projectData.bluePlanetInfo.desc5}
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
                  <div className="buttonArrowIcon">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </div>
                  <p>Previous</p>
                </div>
                <div className="backTopSwitch">
                  <a href="#topAnchor">
                    <FontAwesomeIcon icon={faArrowAltCircleUp} />
                  </a>
                </div>
                <div
                  className="nextSwitch"
                  onClick={this.props.modalContentHandler.bind(
                    this,
                    "next",
                    this.state.next
                  )}
                >
                  <p>Next</p>
                  <div className="buttonArrowIcon">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
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

  mainImg = {
    backgroundImage: `url(${projectData.marvelApiInfo.mainImg})`
  };

  img2 = {
    backgroundImage: `url(${projectData.marvelApiInfo.img2})`
  }

  render() {
    return (
      <div
        tabIndex="0"
        id="myModal"
        className="modal"
        onKeyDown={this.keyEventHandler.bind(this)}
      >
        <div className="modalBody" onClick={this.props.infoClickHandler} />
        <div className="modal-content">
          <div className="topBar">
            <h2 id="projName">{projectData.marvelApiInfo.title}</h2>
            <span onClick={this.props.infoClickHandler} className="close">
              <p>&times;</p>
            </span>
          </div>
          <div className="midModal">
            <div id="topAnchor" className="contentContainer">
              <div className="modalProjectImage" style={this.mainImg} />
              <p className="modalDescription">
                {projectData.marvelApiInfo.description}
              </p>
              <div className="modalProjectImage" style={this.img2} />
              <p className="modalDescription">
                {projectData.marvelApiInfo.desc2}
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
                  <div className="buttonArrowIcon">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </div>
                  <p>Previous</p>
                </div>
                <div className="backTopSwitch">
                  <a href="#topAnchor">
                    <FontAwesomeIcon icon={faArrowAltCircleUp} />
                  </a>
                </div>
                <div
                  className="nextSwitch"
                  onClick={this.props.modalContentHandler.bind(
                    this,
                    "next",
                    this.state.next
                  )}
                >
                  <p>Next</p>
                  <div className="buttonArrowIcon">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}