import React from "react";
import "./footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import YouTubeIcon from "@material-ui/icons/YouTube";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
      <div className="info">
        <p>Tel: +484 707 8840</p>
        <p>Mail: liyu.cq88@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;
