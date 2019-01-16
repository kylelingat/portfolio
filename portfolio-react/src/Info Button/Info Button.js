import React, { Component } from "react";
import Modal from "../Modal/Modal.js";
import projectData from '../Projects Data/ProjectData.js'

class InfoButton extends Component {
  state = {
    modalOpen: false,
    projectParent: null
  };
  
  constructor(props){
    super(props)
    console.log(props, 'Projects passed')
    this.state = {
      projectParent: props.project
     };
  }

  infoClickHandler = () => {
    const doesShow = this.state.modalOpen;
    this.setState({ modalOpen: true });
    console.log('s')
  };

  render() {
    if(this.state.modalOpen === true && this.state.projectParent === 'hackSea'){
      return (          
        <div>
          <div className="moreInfoButton">
            <a target="_blank" onClick={this.infoClickHandler} >More info</a>
            <Modal title={projectData.hackSeaInfo.title}
                   desc={projectData.hackSeaInfo.description} 
                   />
          </div>
      </div>
      )
    } else if (this.state.modalOpen === true && this.state.projectParent === 'haccEdu'){
      return (          
        <div>
          <div className="moreInfoButton">
            <a target="_blank" onClick={this.infoClickHandler} >More info</a>
            <Modal title={projectData.haccInfo.title}
                   desc={projectData.haccInfo.description} 
                   />
          </div>
      </div>
      )
    }
    return (
      <div>
        <div className="moreInfoButton">
          <a target="_blank" onClick={this.infoClickHandler} >More info</a>
        </div>
      </div>
    );
  }
}

export default InfoButton;
