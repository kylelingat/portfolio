import React, { Component } from "react";
import Modal from "../Modal/Modal.js";

class InfoButton extends Component {
  state = {
    modalOpen: false,
    projectParent: null
  };
  
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      projectParent: props.project
     };
  }
  infoClickHandler = () => {
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
            <Modal test={'hello'}/>
          </div>
        ) : null}
      </div>
    );
  }
}

export default InfoButton;
