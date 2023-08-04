import React from 'react';
import './EggSection.css';
import PinkEgg from './GooseLay.gif';


function EggSection (props) {
    return (
      <div className="EggSection">
      <header className={props.className}>
      <img src={PinkEgg} alt="PinkEgg" className="PinkEgg"/>
      <button className="EggButton">Click to Hatch Me</button>    
     
       
      </header>
      </div>
    );
  }
  
  export default EggSection; 