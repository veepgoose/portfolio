import React from 'react';
import './Footer.css';
import FooterImg from './Footer.png';
import GooseFooter from './GooseAnimation.gif';

function Footer(props) {
    return (
        <div className="Footer">
        <header className={props.className}>
        <img src={FooterImg} alt="FooterLabel" className="FooterImg"/>   
        <img src={GooseFooter} alt="GooseFooter" className="GooseFooter"/>
        </header>
        </div>
    );
    }
    
    export default Footer;