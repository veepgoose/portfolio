import React from 'react';
import './LottoGenEgg.css';
import LottoTitle from './LotteryNumberGenTitle.png'; 
import OctoCat from './OctoCat.png';
import LottoAppEgg from './LottoGenEgg.png';
import LottoApp from './Lotto.JPG';
import EggHome from '../HomeEgg/HomeEgg.js';



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
      <p className="LottoText">
      THE HIGH GOOSE LOTTERY NUMBER GENERATOR
      <br/> 
      <br/>


      Introducing the "High Goose Lottery Number Generator" app! Created using ReactJS, this playful and tongue-in-cheek application lets users enter their name and make a couple of whimsical commitments before submitting to The High Goose. Upon doing so, the app generates six random lottery numbers.
      <br />
      <br />
       I revisited this project after completing a full-stack development coding bootcamp to showcase my improved skills. Originally a basic prompt/alert app, I transformed it into a React-powered gem. Its primary purpose is to test my React prowess, but who knows, one day I might just win the lottery with my very own High Goose-generated numbers!
      <br/>
      <br/>
Click on the Egg (yes, another Egg!) to checkout the App, and click on the GitHub OctoCat to see the repo and read more about my process!</p>
        </div>
      </div>
      <EggHome className="EggHome"/>
     
       
      </header>
      </div>
    );
  }
  
  export default LottoProj; 