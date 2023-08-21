import React from 'react';
import './LottoGenEgg.css';
import LottoTitle from './LotteryNumberGenTitle.png'; 
import OctoCat from './OctoCat.png';
import LottoAppEgg from './LottoGenEgg.png';
import LottoApp from './Lotto.JPG';



function LottoProj (props) {
    return (
      <div className="LottoPage">
      <header className={props.className}>
      <img src={LottoTitle} alt="LottoTitle" className="LottoTitle"/>
      <a href="https://gooselottoapp.vercel.app/" target="_blank" rel="noreferrer">
      <img src={LottoAppEgg} alt="LottoEgg" className="LottoEgg"/>
      </a>
      <a href="https://github.com/veepgoose/GooseLotteryGen" target="_blank" rel="noreferrer">
      <img src={OctoCat} alt="OctoCat" className="OctoCat"/>
      </a>
      <img src={LottoApp} alt="LottoApp" className="LottoApp"/>
     
       
      </header>
      </div>
    );
  }
  
  export default LottoProj; 