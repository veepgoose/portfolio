import React from 'react';
import './MemCompEgg.css';
import MemTitle from './MemoryCompTitle.png'; 
import MemOctoCat from './OctoCat.png';
import MemAppEgg from './MemoryCompanionEgg.png';
import MemApp from './Memcomp.JPG';
import EggHome from '../HomeEgg/HomeEgg.js';


function MemProj (props) {
  return (
    <div className="MemPage">
    <header className={props.className}>
    <img src={MemTitle} alt="MemTitle" className="MemTitle"/>
    <a href="https://byte-squad-frontend-memory-companion.vercel.app/" target="_blank" rel="noreferrer">
    <img src={MemAppEgg} alt="MemAppEgg" className="MemAppEgg"/>
    </a>
    <a href="https://github.com/Jakir9/ByteSquad-frontend-MemoryCompanion" target="_blank" rel="noreferrer">
    <img src={MemOctoCat} alt="OctoCat" className="MemOctoCat"/>
    </a>

    <div className="MemContainer">
    <img src={MemApp} alt="MemApp" className="MemApp"/>

    <div className="MemText">
    <p className="MemText">
    MEMORY COMPANION
    <br/> 
    <br/>

    Memory Companion is the result of a 5-week group project, created by myself and 5 fellow School Of Code bootcampers. We were tasked with creating a full-stack app that would solve a real world problem.
    <br />
    <br />
    Memory Companion is a user-friendly application designed to support individuals suffering from dementia and other memory-related conditions. Our app aims to provide a centralised platform for storing memories, visual and audio prompts, and daily activity reminders, tailored to each individual's objectives. By facilitating social care and improving the overall quality of life for those affected by memory loss, our goal is to empower users and enhance their independence.
    <br />
    <br />
Click on the Egg (yes, another Egg!) to checkout the App, and click on the GitHub OctoCat to see the repo and read more about my process!</p>
      </div>
    </div>
    <EggHome className="EggHome"/>
   
     
   </header>
    </div>
  );
}
  
  export default MemProj; 