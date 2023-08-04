import React from 'react';
import './EggSection.css';
import PinkEgg from './PinkEgg.png';


function EggSection (props) {
    return (
      <div className="EggSection">
      <header className={props.className}>
      <img src={PinkEgg} alt="PinkEgg" className="PinkEgg"/>
     
       
      </header>
      </div>
    );
  }
  
  export default EggSection; 