import React from 'react';
import './Skills.css';
import SkillsTitle from './Skills.png'
import ContactTitle from './Contact.png'


function Skills (props) {
    return (
        <div className="Skills">
        <header className={props.className}>
        <img src={SkillsTitle} alt="SkillsTitle" className="SkillsTitle"/>
        <img src={ContactTitle} alt="ContactTitle" className="ContactTitle"/>
        </header>
        </div>
    );
    }

    export default Skills;