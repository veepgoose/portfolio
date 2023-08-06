import React from 'react';
import './Projects.css';
import ProjectsTitle from './Projects.png';


function Projects (props) {
    return (
        <div className="Projects">
        <header className={props.className}>
        <img src={ProjectsTitle} alt="ProjectsTitle" className="ProjectsTitle"/>   
        </header>
        </div>
    );

}

export default Projects;