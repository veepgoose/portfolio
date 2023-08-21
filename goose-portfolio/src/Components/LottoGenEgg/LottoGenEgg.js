import React from 'react';
import './LottoGenEgg.css';
import LottoTitle from './LotteryNumberGenTitle.png'; 
import OctoCat from './OctoCat.png';
import LottoEgg from '../Projects/LottoGenEgg.png';



function LottoProj (props) {
    return (
      <div className="LottoPage">
      <header className={props.className}>
      <img src={LottoTitle} alt="LottoTitle" className="LottoTitle"/>
      <img src={LottoEgg} alt="LottoEgg" className="ProjEgg"/>
      <img src={OctoCat} alt="OctoCat" className="OctoCat"/>
     
       
      </header>
      </div>
    );
  }
  
  export default LottoProj; 