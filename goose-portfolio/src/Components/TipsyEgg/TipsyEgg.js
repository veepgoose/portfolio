import React from 'react';
import './TipsyEgg.css';
import TipsyTitle from './GitTipsyTitle1.png'; 



function TipsyProj (props) {
    return (
      <div className="TipsyPage">
      <header className={props.className}>
      <img src={TipsyTitle} alt="TipsyTitle" className="TipsyTitle"/>
   
       
      </header>
      </div>
    );
  }
  
  export default TipsyProj; 