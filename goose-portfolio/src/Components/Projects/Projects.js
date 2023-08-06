import React from 'react';
import './Projects.css';
import ProjectsTitle from './Projects.png';
import LottoEgg from './LottoGenEgg.png';
import GitEggsy from './GitTipsyEgg.png';
import MemoryEgg from './MemoryCompanionEgg.png';


function Projects (props) {
    return (
        <div className="Projects">
        <header className={props.className}>
        <div className="ProjectsHeader">
        <img src={ProjectsTitle} alt="ProjectsTitle" className="ProjectsTitle"/> 
        <p className="ProjectsText">Here are some of my projects! 
        <br></br>
        Click on the eggs to learn more about them!</p>
        </div>
        <div className="EggCarton">
            <img src={LottoEgg} alt="LottoEgg" className="ProjEgg"/>
            <img src={GitEggsy} alt="GitEggsy" className="ProjEgg"/>
            <img src={MemoryEgg} alt="MemoryEgg" className="ProjEgg"/>
        </div>
        </header>
        </div>
    );

}

export default Projects;
