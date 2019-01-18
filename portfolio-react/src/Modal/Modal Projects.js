import React, { Component } from "react";
import projectData from "../Projects Data/ProjectData.js";

export class HackSeaModal extends Component {
  state = {
    previous: "marvelApi",
    next: "haccEdu"
  };

  constructor(props) {
    super(props);
    console.log(props);
  }

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
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="topBar">
            <h2 id="projName">{projectData.hackSeaInfo.title}</h2>
            <span onClick={this.props.infoClickHandler} className="close">
              &times;
            </span>
          </div>
          <div className="bottomBar">
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
              <div className="modalSwitchContainer">
                    <div className="previousSwitch" onClick={this.props.modalContentHandler.bind(this, "previous", this.state.previous)}>Previous</div>
                    <div className="nextSwitch" onClick={this.props.modalContentHandler.bind(this, "next", this.state.next)}>Next</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class HaccModal extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  mainImgBg = {
    backgroundImage: `url(${projectData.haccInfo.mainImg})`
  };

  render() {
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="topBar">
            <h2 id="projName">{projectData.haccInfo.title}</h2>
            <span onClick={this.props.infoClickHandler} className="close">
              &times;
            </span>
          </div>
          <div className="bottomBar">
            <div className="contentContainer">
              <div className="modalProjectImage" style={this.mainImgBg} />
              <p className="modalDescription">
                {projectData.haccInfo.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class BPModal extends Component {
  mainImgBg = {
    backgroundImage: `url(${projectData.bluePlanetInfo.mainImg})`
  };

  secondImgBg = {
    backgroundImage: `url(${projectData.bluePlanetInfo.mainImg})`
  };

  render() {
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="topBar">
            <h2 id="projName">{projectData.bluePlanetInfo.title}</h2>
            <span onClick={this.props.infoClickHandler} className="close">
              &times;
            </span>
          </div>
          <div className="bottomBar">
            <div className="contentContainer">
              <div className="modalProjectImage" style={this.mainImgBg} />
              <p className="modalDescription">
                {projectData.bluePlanetInfo.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class MarvelModal extends Component {
  mainImgBg = {
    backgroundImage: `url(${projectData.marvelApiInfo.mainImg})`
  };

  render() {
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="topBar">
            <h2 id="projName">{projectData.marvelApiInfo.title}</h2>
            <span onClick={this.props.infoClickHandler} className="close">
              &times;
            </span>
          </div>
          <div className="bottomBar">
            <div className="contentContainer">
              <div className="modalProjectImage" style={this.mainImgBg} />
              <p className="modalDescription">
                {projectData.marvelApiInfo.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
