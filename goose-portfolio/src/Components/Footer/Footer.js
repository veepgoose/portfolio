import React from 'react';
import './Footer.css';
import FooterImg from './Footer.png';

function Footer(props) {
    return (
        <div className="Footer">
        <header className={props.className}>
        <img src={FooterImg} alt="FooterLabel" className="FooterImg"/>   
        </header>
        </div>
    );
    }
    
    export default Footer;