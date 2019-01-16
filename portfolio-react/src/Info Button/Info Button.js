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
    this.state = {
      projectParent: props.project
     };
  }

  infoClickHandler = () => {
    const doesShow = this.state.modalOpen;
    this.setState({ modalOpen: !this.state.modalOpen });
    console.log(this.props, 'Info Button clicked')
  };

  render() {
    if(this.state.modalOpen === true && this.state.projectParent === 'hackSea'){
      return (          
        <div>
          <div className="moreInfoButton">
            <a target="_blank" onClick={this.infoClickHandler} >More info</a>
            <Modal title={projectData.hackSeaInfo.title}
                   desc={projectData.hackSeaInfo.description}
                   infoClickHandler={this.infoClickHandler} 
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
                   infoClickHandler={this.infoClickHandler}  
                   />
          </div>
      </div>
      )
    } else if (this.state.modalOpen === true && this.state.projectParent === 'bluePlanet'){
      return (          
        <div>
          <div className="moreInfoButton">
            <a target="_blank" onClick={this.infoClickHandler} >More info</a>
            <Modal title={projectData.bluePlanetInfo.title}
                   desc={projectData.bluePlanetInfo.description}
                   infoClickHandler={this.infoClickHandler}  
                   />
          </div>
      </div>
      )
    } else if (this.state.modalOpen === true && this.state.projectParent === 'marvelApi'){
      return (          
        <div>
          <div className="moreInfoButton">
            <a target="_blank" onClick={this.infoClickHandler} >More info</a>
            <Modal title={projectData.marvelApiInfo.title}
                   desc={projectData.marvelApiInfo.description}
                   infoClickHandler={this.infoClickHandler}  
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
