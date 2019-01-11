import React from "react";
import '../Projects/Projects.js';
import image1 from '../images/hacksea.png'
import projectData from '../Projects Data/ProjectData.js'

const ProjectItem = (props) => {
  var projectImageBackground = {
    backgroundImage: `url(${props.image})`
  };

  return (
    <div id="hackSeaInfoContainer" className="projectGridItem">
    <div className="projectImage" style={projectImageBackground}></div>
    <div className="projectTitle">
      <h2>{props.title}</h2>
      <p>
          {props.desc}
      </p>
    </div>
    <div className="buttonGrid">
      <div className="visitSiteButton">
        <a href={props.hrefSite} target="_blank">Visit Site</a>
      </div>
      <div className="visitGithubButton">
        <a href={props.hrefGit} target="_blank">Visit Github</a>
      </div>
      <div className="moreInfoButton">
        <a target="_blank">More info</a>
      </div>
    </div>
  </div>
  );
};


export default ProjectItem;