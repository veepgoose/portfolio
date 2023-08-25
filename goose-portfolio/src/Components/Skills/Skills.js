import React from 'react';
import tech from './tech.js';
import './Skills.css';
import SkillsTitle from './Skills.png'



 function Skills(props) {

  return (
    <section id="skills">
       <div className="Skills">
      <header className={props.className}>
        <img src={SkillsTitle} alt="SkillsTitle" className="SkillsTitle"/>
        </header>
       </div>

      <div className='skills-container'>


        <div className='skills-header'>
          
          
        </div>
        <div className='skills-row'>
          <div>
         
            <div className='skills-content'>
            
              <div className='skills-slider'>
              
                {tech.map((skill, index) => (
                  <div className='skill-card' key={index}>
                    <img src={skill.icon} alt={skill.name} />
                    <div className="skill-name">
                      <h3>{skill.name}</h3>
                    </div>
                  </div>
                ))}      
              </div>
          
            </div>
          </div>
      
        </div>
        
        

      </div>
     
    </section>
  )
}

export default Skills;