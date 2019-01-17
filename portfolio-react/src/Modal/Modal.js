import React, { Component } from "react";
import "./Modal.css";
import projectData from '../Projects Data/ProjectData.js'
import {HackSeaModal, HaccModal, BPModal, MarvelModal} from './Modal Projects.js'

class Modal extends Component {
  state = {
    currentProj: null
  };

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      currentProj: props.project
    };
  }

  modalContentHandler = (button) => {
    if(button === "previous"){
      console.log("previous")
    } else if(button === "next"){
      console.log("next")
    }
  }

  render() {
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="topBar">
            <h2 id="projName">{this.props.title}</h2>
            <span onClick={this.props.infoClickHandler} className="close">
              &times;
            </span>
          </div>
          <div className="bottomBar">
              {this.state.currentProj === "hackSea" ? (
                <div>
                  <HackSeaModal modalContentHandler={this.modalContentHandler} />
                </div>
              ) : this.state.currentProj === 'haccEdu' ? (
                <div>
                  <HaccModal />
              </div>
              ) : this.state.currentProj === "bluePlanet" ? (
                <div>
                  <BPModal />
                </div>
              ) : this.state.currentProj === 'marvelApi' ? (
                <div>
                  <MarvelModal />
              </div>
              ) : null }
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
