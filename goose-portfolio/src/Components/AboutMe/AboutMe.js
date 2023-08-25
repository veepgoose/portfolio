import React from 'react';
import './AboutMe.css';
import AboutMeTitle from './AboutMe.png';

function AboutMe (props) {
    return (
      <div className="AboutMeContainer">
      <div className="AboutMe">
      <img src={AboutMeTitle} alt="About Me" className="AboutMeTitle"/>
      <div className="AboutMeText">
      <p> *IF YOU'RE READING THIS!!! THIS IS A WORK IN PROGRESS....BELOW IS SAMPLE TEXT, THE FINAL COPY WILL BE FAR MORE INTERESTING, I PROMISE* I am a full stack web developer with a background in backflips and gamboles. I have a passion for creating and learning new things. I am a problem, I'm rarely the solution. I am a team player and love working with others. I am a quick learner and am always up for a challenge (Can I nap yet??). I am a hard worker and am always willing to put in the extra effort to get the job done, including bits no one asked for, and likely never wanted. I am a creative thinker and love to think outside (and dance on) the box. I am a self starter and am always looking for ways to improve my dancing ability. I am a leader and love to take initiative. I am a dedicated worker and am always willing to go the extra mile for the perfect pint. I am a positive person and love to bring joy to others. I am a people person and love to meet new people, as long as they're far away. I am a detail oriented person and love to make sure everything is done right...eventually. I am a flexible person (actually a contortionist. No jokes) and love to adapt to new situations. I am a goal oriented person and love to set goals and achieve them...eventually.</p>
      </div>
      </div>
      </div>
    );
  }

  export default AboutMe;