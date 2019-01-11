import React, { Component } from 'react';
import './Main.css';
import Projects from '../Projects/Projects.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faEnvelope)
library.add(faArrowCircleDown)
library.add(faGithub)

console.log(document.getElementById('t'))
console.log(<Projects />)

class Main extends Component { 
    

    scrollHandler = (item) => {
        window.scrollTo({
            top:item.offsetTop, 
            behavior: "smooth"   // Optional, adds animation
        })
    }
    render(){
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
            <FontAwesomeIcon icon={faArrowCircleDown} onClick={this.scrollHandler.bind(this, <Projects />)} />
        </div>
        </div>
    )
    }
}

export default Main;