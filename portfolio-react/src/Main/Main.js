import React from 'react';
import ReactDOM from 'react-dom';
import './Main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

const Main = () => { 
    return (
        <div id="inroContainer">
        <div id="introText">
            <h1>Kyle Lingat</h1>
            <h2>Front End Web Developer</h2>
            <div id="contactBar">
                <FontAwesomeIcon icon="igloo" />
                <a href="https://github.com/kylelingat" target="_blank"><i class="fab fa-github"></i></a>
                <a href="mailto:kylejlingat@gmail.com"><i class="fas fa-envelope"></i></a>
            </div>
        </div>
        <div id="arrowDown">
            <i class="far fa-arrow-alt-circle-down"></i>
        </div>
        </div>
    )
}

export default Main;