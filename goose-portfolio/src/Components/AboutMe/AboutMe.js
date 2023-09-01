import React from 'react';
import './AboutMe.css';
import AboutMeTitle from './AboutMe.png';

function AboutMe (props) {
    return (
      <div className="AboutMeContainer">
      <div className="AboutMe">
      <img src={AboutMeTitle} alt="About Me" className="AboutMeTitle"/>
      <div className="AboutMeText">
      <p> 👋 Welcome to my corner of the internet! I'm Victoria, also known as Goose, a recently qualified Fullstack Software Developer.
      <br/>
<br/>
I've transitioned from a successful wine industry career to the world of tech, driven by a passion for creating innovative solutions. With a background in design, I relish crafting user experiences and bringing ideas to life through code. You might wonder why I swapped sipping Chardonnay in picturesque vineyards for code at my trusty PC? Well, I've always been passionate about *creating* things!
<br/>
<br/>
I'm the kind of person who sees problems as puzzles, and I love inventing imaginative (and often whimsical) solutions. With an entrepreneurial spirit and a knack for steering businesses toward innovation, I couldn't resist the allure of the tech world. I found my true calling in solving real-world problems through apps, guiding ideas from conception to fruition.
<br/>
<br/>
With a foundation in design, I adore crafting user-centric experiences. It's a thrilling journey, watching a seedling of an idea evolve into something extraordinary. From ideation and wireframing to breathing life into designs with the power of code – every step is a joy.
<br/>
<br/>
Explore my portfolio to discover past and current projects, along with deployed apps and GitHub repositories. If you're interested in collaborating, let's connect and design the perfect solution together!
<br/>
<br/>

<h3> And if you're wondering about the eggs, they symbolise the magic of creation, the birth of ideas, and hidden potential. 🥚✨</h3>







</p>
      </div>
      </div>
      </div>
    );
  }

  export default AboutMe;