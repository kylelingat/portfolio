import React, { Component } from "react";
import "./Modal.css";
import projectData from '../Projects Data/ProjectData.js'
import {HackSeaModal, HaccModal, BPModal, MarvelModal} from './Modal Projects.js'

class Modal extends Component {
  state = {
    currentProj: 'hackSea'
  };

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      currentProj: props.project
    };
  }

  // modalContentHandler = (button, test) => {
  //   if(button === "previous"){
  //     console.log("previous")
  //     console.log(test)
  //     this.setState = {
  //       currentProj: test
  //     }
  //   } else if(button === "next"){
  //     console.log("next")
  //     console.log(test)
  //     this.setState = {
  //       currentProj: test
  //     }this.setState({ projectParent: test });
  //   }
  // }

  render() {
    return (
          <div className="dynamicModal" >
              {this.state.currentProj === "hackSea" ? (
                  <HackSeaModal modalContentHandler={this.modalContentHandler} infoClickHandler={this.props.infoClickHandler} title={this.props.title}  />
              ) : this.state.currentProj === 'haccEdu' ? (
                  <HaccModal modalContentHandler={this.modalContentHandler} infoClickHandler={this.props.infoClickHandler} title={this.props.title} />
              ) : this.state.currentProj === "bluePlanet" ? (
                  <BPModal modalContentHandler={this.modalContentHandler} infoClickHandler={this.props.infoClickHandler} title={this.props.title}  />
              ) : this.state.currentProj === 'marvelApi' ? (
                  <MarvelModal modalContentHandler={this.modalContentHandler} infoClickHandler={this.props.infoClickHandler} title={this.props.title}  />
              ) : null }
          </div>
    );
  }
}

export default Modal;
