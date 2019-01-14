import React, { Component } from "react";
import "./Modal.css";

const Modal = ( props ) => {
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    );
}

export default Modal