import React, { Component } from "react";
import projectData from '../Projects Data/ProjectData.js'

export class HackSeaModal extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    mainImgBg = {
        backgroundImage: `url(${projectData.hackSeaInfo.mainImg})`
      };

      secondImgBg = {
        backgroundImage: `url(${projectData.hackSeaInfo.img2})`
    }

    thirdImgBg = {
        backgroundImage: `url(${projectData.hackSeaInfo.img3})`
    }
      
    render(){
        return (
            <div className="contentContainer">
                <div className="modalProjectImage" style={this.mainImgBg}></div>
                <p className="modalDescription">{projectData.hackSeaInfo.description}</p>
                <div className="modalProjectImage" style={this.secondImgBg}></div>
                <p className="modalDescription">{projectData.hackSeaInfo.description2}</p>
                <div className="modalProjectImage" style={this.thirdImgBg}></div>
                <p className="modalDescription">{projectData.hackSeaInfo.description3}</p>
                <div className="modalSwitchContainer">
                    <div className="previousSwitch" onClick={this.props.modalContentHandler.bind(this, "previous")}>Previous</div>
                    <div className="nextSwitch" onClick={this.props.modalContentHandler.bind(this, "next")}>Next</div>
                </div>
            </div>
        )
    }
}

export class HaccModal extends Component {
    mainImgBg = {
        backgroundImage: `url(${projectData.haccInfo.mainImg})`
      };
      
    render(){
        return (
            <div className="contentContainer">
                <div className="modalProjectImage" style={this.mainImgBg}></div>
                <p className="modalDescription">{projectData.haccInfo.description}</p>
            </div>
        )
    }
}

export class BPModal extends Component {
    mainImgBg = {
        backgroundImage: `url(${projectData.bluePlanetInfo.mainImg})`
      };
    
    secondImgBg = {
        backgroundImage: `url(${projectData.bluePlanetInfo.mainImg})`
    }
    
    render(){
        return (
            <div className="contentContainer">
                <div className="modalProjectImage" style={this.mainImgBg}></div>
                <p className="modalDescription">{projectData.bluePlanetInfo.description}</p>
            </div>
        )
    }
}

export class MarvelModal extends Component {

    mainImgBg = {
        backgroundImage: `url(${projectData.marvelApiInfo.mainImg})`
      };
      
    render(){
        return (
            <div className="contentContainer">
                <div className="modalProjectImage" style={this.mainImgBg}></div>
                <p className="modalDescription">{projectData.marvelApiInfo.description}</p>
            </div>
        )
    }
}
