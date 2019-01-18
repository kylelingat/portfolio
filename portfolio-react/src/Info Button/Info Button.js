import React, { Component } from "react";
import Modal from "../Modal/Modal.js";
import projectData from "../Projects Data/ProjectData.js";
import { HackSeaModal, HaccModal, BPModal, MarvelModal } from "../Modal/Modal Projects.js";

class InfoButton extends Component {
  state = {
    modalOpen: false,
    changeProj: false,
    projectParent: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      projectParent: props.project,
    };
  }

  modalContentHandler = (button, test) => {
    if(button === "previous"){
      console.log("previous")
      console.log(test)
      this.setState({ projectParent: test });
    } else if(button === "next"){
      console.log("next")
      console.log(test)
      this.setState({ projectParent: test });
    }
  }

  infoClickHandler = () => {
    const doesShow = this.state.modalOpen;
    this.setState({ modalOpen: !this.state.modalOpen, projectParent: this.props.project  });
  };

  render() {
    if (
      this.state.modalOpen === true &&
      this.state.projectParent === "hackSea"
    ) {
      return (
        <div>
          <div className="moreInfoButton">
            <a target="_blank" onClick={this.infoClickHandler}>
              More info
            </a>
            <HackSeaModal infoClickHandler={this.infoClickHandler} modalContentHandler={this.modalContentHandler} />
          </div>
        </div>
      );
    } else if (
      this.state.modalOpen === true &&
      this.state.projectParent === "haccEdu"
    ) {
      return (
        <div>
          <div className="moreInfoButton">
            <a target="_blank" onClick={this.infoClickHandler}>
              More info
            </a>
            <HaccModal infoClickHandler={this.infoClickHandler} />
          </div>
        </div>
      );
    } else if (
      this.state.modalOpen === true &&
      this.state.projectParent === "bluePlanet"
    ) {
      return (
        <div>
          <div className="moreInfoButton">
            <a target="_blank" onClick={this.infoClickHandler}>
              More info
            </a>
            <BPModal infoClickHandler={this.infoClickHandler}/>
          </div>
        </div>
      );
    } else if (
      this.state.modalOpen === true &&
      this.state.projectParent === "marvelApi"
    ) {
      return (
        <div>
          <div className="moreInfoButton">
            <a target="_blank" onClick={this.infoClickHandler}>
              More info
            </a>
            <MarvelModal infoClickHandler={this.infoClickHandler} />
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="moreInfoButton">
          <a target="_blank" onClick={this.infoClickHandler}>
            More info
          </a>
        </div>
      </div>
    );
  }
}

export default InfoButton;