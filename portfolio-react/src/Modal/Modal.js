import React, { Component } from "react";
import "./Modal.css";

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

  projectImageBackground = {
    backgroundImage: `url(${this.props.image})`
  };

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
            <div className="contentContainer">
            <div className="modalProjectImage" style={this.projectImageBackground}></div>
              {this.state.currentProj === "hackSea" ? (
                <div>
                  hackSea Content
                </div>
              ) : this.state.currentProj === 'haccEdu' ? (
                <div>
                  haccEdu Content
              </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
