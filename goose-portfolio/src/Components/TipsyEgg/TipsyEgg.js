import React from 'react';
import './TipsyEgg.css';
import TipsyTitle from './GitTipsyTitle1.png'; 
import TipsyOctoCat from './OctoCat.png';
import TipsyAppEgg from './GitTipsyEgg.png';
import TipsyApp from './Tipsy++MainPage.png';
import EggHome from '../HomeEgg/HomeEgg.js';



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

Git Tipsy++ is a full-stack React app, born out of post-graduation enthusiasm and co-created with fellow School Of Code bootcampers Tom Webb and Sam Baldwin.
<br />
<br />
The idea for this app was born out of a desire to celebrate our graduation from the School of Code bootcamp in a fun and unique way. Back in July 2023 School Of Code Cohort 14 were the first Cohort to be invited to Microsoft in Reading for our graduation ceremony. We wanted to create an app that would allow us to continue the celebrations after the ceremony, and so Git Tipsy++ was born! 
<br />
<br />
Originally, I intended to create a Google Form to send out to the 120 bootcampers due to attend, in order to ascertain how many people would be interested in attending a post-ceremony celebration. However, I quickly realised that this would be a great opportunity to create a full-stack app, and so I enlisted the help of fellow bootcampers Tom and Sam to help me bring the idea to life.
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
  
  export default TipsyProj; 