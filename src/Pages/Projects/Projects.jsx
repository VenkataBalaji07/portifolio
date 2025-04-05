import React from "react";
import './Projects.css';

const Projects = () => {
  return (
    <div id="projectscomponent">
      <center>
        <h1>Projects</h1>
      </center>
      <div className="projectsGrid">
      <div className="projectsDisplaying">
        <h3>E Commerce Purchase Invention Model</h3>
        <p>Details and description of the project</p>
      </div>
      <div className="projectsDisplaying">
        <h3>Exploratory Data Analysis</h3>
        <p>Details and description of the project</p>
      </div>
      </div>
    </div>
  );
};

export default Projects;
