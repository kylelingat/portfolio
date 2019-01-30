import React, { Component } from "react";
import {
  HackSeaModal,
  HaccModal,
  BPModal,
  MarvelModal
} from "../Modal/Modal Projects.js";
import Modal from "../Modal/Modal.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
library.add(faInfoCircle);

class InfoButton extends Component {
  state = {
    modalOpen: null,
    changeProj: false,
    projectParent: null
  };

  constructor(props) {
    super(props);
    this.state = {
      projectParent: props.project
    };
  }

  modalContentHandler = (button, proj) => {
    if (button === "previous") {
      console.log("previous", proj);
      this.setState({ projectParent: proj });
    } else if (button === "next") {
      console.log("next", proj);
      this.setState({ projectParent: proj });
    }
  };

  infoClickHandler = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
      projectParent: this.props.project
    });
  };

  render() {
    if (
      this.state.modalOpen === true &&
      this.state.projectParent === "hackSea"
    ) {
      return (
        <div>
          <div className="moreInfoButton">
            <a
              className="infoButtonA"
              target="_blank"
              onClick={this.infoClickHandler}
            >
              More info
            </a>
            <HackSeaModal
              infoClickHandler={this.infoClickHandler}
              modalContentHandler={this.modalContentHandler}
            />
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
            <a
              className="infoButtonA"
              target="_blank"
              onClick={this.infoClickHandler}
            >
              More info
            </a>
            <HaccModal
              infoClickHandler={this.infoClickHandler}
              modalContentHandler={this.modalContentHandler}
            />
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
            <a
              className="infoButtonA"
              target="_blank"
              onClick={this.infoClickHandler}
            >
              More info
            </a>
            <BPModal
              infoClickHandler={this.infoClickHandler}
              modalContentHandler={this.modalContentHandler}
            />
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
            <a
              className="infoButtonA"
              target="_blank"
              onClick={this.infoClickHandler}
            >
              More info
            </a>
            <MarvelModal
              infoClickHandler={this.infoClickHandler}
              modalContentHandler={this.modalContentHandler}
            />
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="moreInfoButton">
          <a
            className="infoButtonA"
            target="_blank"
            onClick={this.infoClickHandler}
          >
            <FontAwesomeIcon icon={faInfoCircle} />&nbsp;&nbsp;More info
          </a>
        </div>
      </div>
    );
  }
}

export default InfoButton;
