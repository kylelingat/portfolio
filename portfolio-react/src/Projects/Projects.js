import React, { Component } from 'react';
import './Projects.css';
import ProjectItem from '../Projects Data/ProjectItems.js';
import projectData from '../Projects Data/ProjectData.js'
import InfoButton from '../Info Button/Info Button';

class Projects extends Component { 


    render(){
    return (
        <div id="projectsContainer">
        <h1 id="t">Projects</h1>
        <div id="projectGridContainer">
        <ProjectItem title={projectData.hackSeaInfo.title} desc={projectData.hackSeaInfo.description} image={projectData.hackSeaInfo.mainImg} hrefSite={projectData.hackSeaInfo.urls.site} hrefGit={projectData.hackSeaInfo.urls.gitHub} modalClick={'hackSea'}/>
        <ProjectItem title={projectData.haccInfo.title} desc={projectData.haccInfo.description} image={projectData.haccInfo.mainImg} hrefSite={projectData.haccInfo.urls.site}
        hrefGit={projectData.haccInfo.urls.gitHub}/>
        <ProjectItem title={projectData.bluePlanetInfo.title} desc={projectData.bluePlanetInfo.description} image={projectData.bluePlanetInfo.mainImg} hrefSite={projectData.bluePlanetInfo.urls.site}
        hrefGit={projectData.bluePlanetInfo.urls.gitHub} />
        <ProjectItem title={projectData.marvelApiInfo.title} desc={projectData.marvelApiInfo.description} image={projectData.marvelApiInfo.mainImg} hrefSite={projectData.marvelApiInfo.urls.site}
        hrefGit={projectData.marvelApiInfo.urls.gitHub} />
        </div>

    </div>
    )
    }
}
export default Projects;