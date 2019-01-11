import React, { Component } from 'react';
import './Projects.css';
import Main from '../Main/Main.js'
import ProjectItem from '../Projects Data/ProjectItems.js';
import projectData from '../Projects Data/ProjectData.js'

class Projects extends Component { 
    render(){
    return (
        <div id="projectsContainer">
        <h1 id="t">Projects</h1>
        <div id="projectGridContainer">
        <ProjectItem title={projectData.hackSeaInfo.title} desc={projectData.hackSeaInfo.description} image={projectData.hackSeaInfo.mainImg} hrefSite={projectData.hackSeaInfo.urls.site} hrefGit={projectData.hackSeaInfo.urls.gitHub} />
        <ProjectItem title={projectData.haccInfo.title} desc={projectData.haccInfo.description} image={projectData.haccInfo.mainImg} hrefSite={projectData.haccInfo.urls.site}
        hrefGit={projectData.haccInfo.urls.gitHub} />
        </div>
    </div>
    )
    }
}
export default Projects;