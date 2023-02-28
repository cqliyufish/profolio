import React from "react";
import "./project.css";
import ProjectItem from "./ProjectItem";
import eshop from "../assets/eshop.jpg";
import platform from "../assets/platform.jpg";
import social from "../assets/facebook.jpg";

export default function Portfolio() {
  return (
    <div className="projects" id="portfolio">
      <h1> My Projects</h1>
      <div className="projectList">
        <ProjectItem
          name="Social Media Website"
          image={social}
          desc="NodeJS React"
          github="https://github.com/cqliyufish/beeSocial"
          youtube="https://www.youtube.com/watch?v=UoOE3vNjaMM"
        />
        <ProjectItem
          name="E-Commercial Shop"
          image={eshop}
          github="https://github.com/cqliyufish/beeShop"
          youtube="https://www.youtube.com/watch?v=Ry0nxzT54i4"
        />
        <ProjectItem
          name="E-Commercial Admin Platform"
          image={platform}
          github="https://github.com/cqliyufish/beeShop"
          youtube="https://www.youtube.com/watch?v=8trfnTy1_mE"
        />
      </div>
    </div>
  );
}
