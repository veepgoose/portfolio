import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.png'; 
import ProfileImg from './PinkMe.png';
import Goose from './GooseAnimation.gif';


function Header (props) {
    return (
      <div className="Header">
      <header className={props.className}>
      <img src={HeaderTitle} alt="HeaderTitle" className="HeaderTitle"/>
      <img src={ProfileImg} alt="ProfileImg" className="ProfileImg"/>
      <img src={Goose} alt="Goose" className="Goose"/>
       
      </header>
      </div>
    );
  }
  
  export default Header; 