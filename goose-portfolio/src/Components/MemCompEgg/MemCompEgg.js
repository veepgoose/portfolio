import React from 'react';
import './MemCompEgg.css';
import MemTitle from './MemoryCompTitle.png'; 



function MemProj (props) {
    return (
      <div className="MemPage">
      <header className={props.className}>
      <img src={MemTitle} alt="MemTitle" className="MemTitle"/>
   
       
      </header>
      </div>
    );
  }
  
  export default MemProj; 