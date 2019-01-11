import React from "react";
import '../Projects/Projects.js';

const ProjectItem = (props) => {
  var projectImageBackground = {
    backgroundImage: "url(" + "../images/hacksea.png" + ")"
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
        <a target="_blank">Visit Site</a>
      </div>
      <div className="visitGithubButton">
        <a target="_blank">Visit Github</a>
      </div>
      <div className="moreInfoButton">
        <a target="_blank">More info</a>
      </div>
    </div>
  </div>
  );
};


export default ProjectItem;