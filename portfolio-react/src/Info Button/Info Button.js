import React, { Component } from "react";
import Modal from "../Modal/Modal.js";

class InfoButton extends Component {
  state = {
    modalOpen: false
  };

  infoClickHandler = () => {
    console.log("hey");
    console.log(this);
    const doesShow = this.state.modalOpen;
    this.setState({ modalOpen: !doesShow });
  };

  render() {
    return (
      <div>
        <div className="moreInfoButton" onClick={this.infoClickHandler}>
          <a target="_blank">More info</a>
        </div>
        {this.state.modalOpen === true ? (
          <div>
            <Modal />
          </div>
        ) : null}
      </div>
    );
  }
}

export default InfoButton;
