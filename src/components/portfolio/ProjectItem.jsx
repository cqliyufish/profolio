import React from "react";
import "./project.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
function ProjectItem({ image, name, desc, github, youtube }) {
  return (
    <div className="projectItem">
      <div className="bgImage" style={{ backgroundImage: `url(${image})` }} />
      <h3>{name}</h3>
      <a href={github} target="_blank" rel="noreferrer">
        <GitHubIcon className="icon" style={{ color: "black" }} />
      </a>
      <a href={youtube} target="_blank" rel="noreferrer">
        <LanguageIcon className="icon" style={{ color: "black" }} />
      </a>
    </div>
  );
}

export default ProjectItem;
