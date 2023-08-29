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

I decided to make my own random lottery number generator, so that when I win the lottery I can say that I got the winning numbers by coding an app myself!

Click on the Egg (yes, another Egg!) to checkout the App, and click on the GitHub OctoCat to see the repo and read more about my process!</p>
      </div>
    </div>
    <EggHome className="EggHome"/>
   
     
   </header>
    </div>
  );
}
  
  export default MemProj; 