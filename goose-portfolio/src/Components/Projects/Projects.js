import React from 'react';
import './Projects.css';
import ProjectsTitle from './Projects.png';
import ProjEgg from './ProjEgg.png';


function Projects (props) {
    return (
        <div className="Projects">
        <header className={props.className}>
        <div className="ProjectsHeader">
        <img src={ProjectsTitle} alt="ProjectsTitle" className="ProjectsTitle"/> 
        </div>
        <div className="EggCarton">
            <div className="EggTop">
                 <img src={ProjEgg} alt="ProjEgg" className="ProjEgg1"/>
                 <img src={ProjEgg} alt="ProjEgg" className="ProjEgg2"/>
                 <img src={ProjEgg} alt="ProjEgg" className="ProjEgg3"/>
            </div>
            <div className="EggBottom">
                 <img src={ProjEgg} alt="ProjEgg" className="ProjEgg4"/>
                 <img src={ProjEgg} alt="ProjEgg" className="ProjEgg5"/>
                 <img src={ProjEgg} alt="ProjEgg" className="ProjEgg6"/>
        </div>  
        </div>
        </header>
        </div>
    );

}

export default Projects;