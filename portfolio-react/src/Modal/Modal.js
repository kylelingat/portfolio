import React, { Component } from "react";
import "./Modal.css";
import ModalClose from "./Modal Close";

class Modal extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <ModalClose infoClickHandler={this.props.infoClickHandler} />
          <p>{this.props.title}</p>
        </div>
      </div>
    );
  }
}

export default Modal