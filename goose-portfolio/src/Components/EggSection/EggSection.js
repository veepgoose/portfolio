import React,  {useState } from 'react';
import './EggSection.css';
import HatchingEgg from './GooseLay.gif';
import AboutMe from '../AboutMe/AboutMe.js';
import UncrackedEgg from './PinkEgg.png';


function EggSection (props) {
    const [isHatched, setIsHatched] = useState(false);

    const HatchEgg = () => {
        setIsHatched(true);
    };

    return (
      <div className="EggSection">
      <header className={props.className}>
      <img src={UncrackedEgg} alt="UncrackedEgg" className="UncrackedEgg"/>
      <button onClick={HatchEgg}  className="EggButton">HATCH ME</button> 
      {isHatched && <img src={HatchingEgg} alt="HatchingEgg" className="HatchingEgg"/>
      }
      <AboutMe className="AboutMe"/>   
     
      
      </header>
      </div>
    );
  }
  
  export default EggSection; 