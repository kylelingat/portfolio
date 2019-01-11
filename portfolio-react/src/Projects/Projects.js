import React from 'react';
import './Projects.css';
import ProjectItem from '../Projects Data/ProjectItems.js';
import projectData from '../Projects Data/ProjectData.js'

const Projects = () => { 
    return (
        <div id="projectsContainer">
        <h1 id="t">Projects</h1>
        <div id="projectGridContainer">
        <ProjectItem title={projectData.hackSeaInfo.title} desc={projectData.hackSeaInfo.description} image={projectData.hackSeaInfo.mainImg}/>
        </div>
    </div>
    )
}

export default Projects;