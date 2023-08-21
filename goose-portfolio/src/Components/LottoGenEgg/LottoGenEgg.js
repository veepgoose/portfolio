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

      <div className="LottoContainer">
      <img src={LottoApp} alt="LottoApp" className="LottoApp"/>

      <div className="LottoText">
      <p className="LottoText">Goose Lottery Generator

I decided to make my own random lottery number generator, so that when I win the lottery I can say that I got the winning numbers by coding an app myself!

Click on the Egg (yes, another Egg!) to checkout the App, and click on the GitHub OctoCat to see the repo and read more about my process!</p>
        </div>
      </div>

     
       
      </header>
      </div>
    );
  }
  
  export default LottoProj; 