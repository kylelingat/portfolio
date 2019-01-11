import React from 'react';
import ReactDOM from 'react-dom';
import './Main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faEnvelope)
library.add(faGithub)


const Main = () => { 
    return (
        <div id="inroContainer">
        <div id="introText">
            <h1>Kyle Lingat</h1>
            <h2>Front End Web Developer</h2>
            <div id="contactBar">
                <a href="https://github.com/kylelingat" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="mailto:kylejlingat@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
        </div>
        <div id="arrowDown">
            <i className="far fa-arrow-alt-circle-down"></i>
        </div>
        </div>
    )
}

export default Main;