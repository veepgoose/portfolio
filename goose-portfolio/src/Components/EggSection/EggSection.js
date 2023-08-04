import React from 'react';
import './EggSection.css';
import PinkEgg from './GooseLay.gif';
import AboutMe from '../AboutMe/AboutMe.js';


function EggSection (props) {
    return (
      <div className="EggSection">
      <header className={props.className}>
      <img src={PinkEgg} alt="PinkEgg" className="PinkEgg"/>
      <button className="EggButton">HATCH ME</button> 
      <AboutMe className="AboutMe"/>   
     
       
      </header>
      </div>
    );
  }
  
  export default EggSection; 