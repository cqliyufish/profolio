import React from "react";
import "./project.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
function ProjectItem({ image, name, desc, github, youtube }) {
  return (
    <div className="projectItem">
      <div className="bgImage" style={{ backgroundImage: `url(${image})` }} />
      <h3>{name}</h3>
      <a href={github} target="_blank" rel="noreferrer">
        <GitHubIcon className="icon" style={{ color: "black" }} />
      </a>
      <a href={youtube} target="_blank" rel="noreferrer">
        <YouTubeIcon className="icon" style={{ color: "black" }} />
      </a>
    </div>
  );
}

export default ProjectItem;
