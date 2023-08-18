import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/LottoGenEgg">
            <img src={LottoEgg} alt="LottoEgg" className="ProjEgg"/>
            </Link>
            <Link to="/git-tipsy">
            <img src={GitEggsy} alt="GitEggsy" className="ProjEgg"/>
            </Link>
            <Link to="/mem-comp">
            <img src={MemoryEgg} alt="MemoryEgg" className="ProjEgg"/>
            </Link>
        </div>
        </header>
        </div>
    );

}

export default Projects;
