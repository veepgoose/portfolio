import React from 'react';
import './TipsyEgg.css';
import TipsyTitle from './GitTipsyTitle1.png'; 
import TipsyOctoCat from './OctoCat.png';
import TipsyAppEgg from './GitTipsyEgg.png';
import TipsyApp from './Tipsy++MainPage.png';



function TipsyProj (props) {
  return (
    <div className="TipsyPage">
    <header className={props.className}>
    <img src={TipsyTitle} alt="TipsyTitle" className="TipsyTitle"/>
    <a href="https://soc-graduation-app.vercel.app/" target="_blank" rel="noreferrer">
    <img src={TipsyAppEgg} alt="TipsyAppEgg" className="TipsyAppEgg"/>
    </a>
    <a href="https://github.com/veepgoose/SOCGraduationApp" target="_blank" rel="noreferrer">
    <img src={TipsyOctoCat} alt="OctoCat" className="TipsyOctoCat"/>
    </a>

    <div className="TipsyContainer">
    <img src={TipsyApp} alt="TipsyApp" className="TipsyApp"/>

    <div className="TipsyText">
    <p className="TipsyText">
    GIT TIPSY++ 
    <br/> 
    <br/>

I decided to make my own random lottery number generator, so that when I win the lottery I can say that I got the winning numbers by coding an app myself!

Click on the Egg (yes, another Egg!) to checkout the App, and click on the GitHub OctoCat to see the repo and read more about my process!</p>
      </div>
    </div>

   
     
    </header>
    </div>
  );
}
  
  export default TipsyProj; 