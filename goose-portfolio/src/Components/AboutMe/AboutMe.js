import React from 'react';
import './AboutMe.css';
import AboutMeTitle from './AboutMe.png';

function AboutMe (props) {
    return (
      <div className="AboutMeContainer">
      <div className="AboutMe">
      <div className="AboutMeText">
      <img src={AboutMeTitle} alt="About Me" className="AboutMeTitle"/>
      <p>I am a full stack web developer with a background in education. I have a passion for creating and learning new things. I am a problem solver and enjoy the challenge of finding solutions. I am a team player and love working with others. I am a quick learner and am always up for a challenge. I am a hard worker and am always willing to put in the extra effort to get the job done. I am a creative thinker and love to think outside the box. I am a self starter and am always looking for ways to improve. I am a leader and love to take initiative. I am a dedicated worker and am always willing to go the extra mile. I am a positive person and love to bring joy to others. I am a people person and love to meet new people. I am a detail oriented person and love to make sure everything is done right. I am a flexible person and love to adapt to new situations. I am a goal oriented person and love to set goals and achieve them.</p>
      </div>
      </div>
      </div>
    );
  }

  export default AboutMe;