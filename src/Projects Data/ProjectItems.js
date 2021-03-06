import React from "react";
import InfoButton from "../Info Button/Info Button.js";
import projectData from "../Projects Data/ProjectData.js";

const ProjectItem = props => {
  var projectImageBackground = {
    backgroundImage: `url(${props.image})`
  };

  return (
    <div className="projectGridItem">
      <div className="projectImage" style={projectImageBackground} />
      <div className="projectTitle">
        <h2>{props.title}</h2>
      </div>
      <div className="projectDesc">
        <p>{props.desc}</p>
      </div>
      <div className="buttonGrid">
        <div className="visitSiteButton">
          <a href={props.hrefSite} target="_blank">
            Visit Site
          </a>
        </div>
        <div className="visitGithubButton">
          <a href={props.hrefGit} target="_blank">
            Visit Github
          </a>
        </div>

        {props.title === projectData.hackSeaInfo.title ? (
          <div>
            <InfoButton project={"hackSea"} />
          </div>
        ) : props.title === projectData.haccInfo.title ? (
          <div>
            <InfoButton project={"haccEdu"} />
          </div>
        ) : props.title === projectData.bluePlanetInfo.title ? (
          <div>
            <InfoButton project={"bluePlanet"} />
          </div>
        ) : props.title === projectData.marvelApiInfo.title ? (
          <div>
            <InfoButton project={"marvelApi"} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectItem;
