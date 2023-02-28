import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  // location changes, close navbar
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Lydia.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "lydia.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => setExpandNavbar(!expandNavbar)}>
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="experience">Experience</Link>
        <span onClick={onButtonClick}>Resume</span>
      </div>
    </div>
  );
}

export default Navbar;
