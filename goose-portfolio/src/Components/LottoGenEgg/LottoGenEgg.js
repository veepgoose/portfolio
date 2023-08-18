import React from 'react';
import './LottoGenEgg.css';
import LottoTitle from './LotteryNumberGenTitle.png'; 



function LottoProj (props) {
    return (
      <div className="LottoPage">
      <header className={props.className}>
      <img src={LottoTitle} alt="LottoTitle" className="LottoTitle"/>
   
       
      </header>
      </div>
    );
  }
  
  export default LottoProj; 