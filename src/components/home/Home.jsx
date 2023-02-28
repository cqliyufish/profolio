import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";

import "./home.css";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Lydia</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating</p>
          <a
            href="https://www.linkedin.com/in/yu-li-105ba7209/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/cqliyufish"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.youtube.com/@yuli-ws3bq"
            target="_blank"
            rel="noreferrer"
          >
            <YouTubeIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJs,Redux,HTML,CSS,NPM,BootStrap,MaterialUI</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, Java Spring,Express,MySQL,MongoDB</span>
          </li>
          <li className="item">
            <h2>Language</h2>
            <span>JavaScript, Java, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
