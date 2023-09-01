import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Header from './Components/Header/Header';
import EggSection from './Components/EggSection/EggSection';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer';
import LottoGenEgg from './Components/LottoGenEgg/LottoGenEgg';
import TipsyEgg from './Components/TipsyEgg/TipsyEgg';
import MemCompEgg from './Components/MemCompEgg/MemCompEgg';
import Contact from './Components/Contact/Contact';




function App() {
  return (

 
    <BrowserRouter>

    <Routes>

      <Route path="/" element={
        <div>
         
          <div className="App">
      <header className="App-header">
        
        <p>
         <Header className="Header"/>
         <EggSection className="EggSection"/>
         <Projects className="Projects"/>
         <Skills className="Skills"/>
         <Contact className="Contact"/>
         <Footer className="Footer"/>

        </p>
        
      </header>
    </div>
          
        </div>
        } />

      <Route path="/LottoGenEgg" element={<LottoGenEgg/>} />
      <Route path="/TipsyEgg" element={<TipsyEgg />} />
      <Route path="/MemCompEgg" element={<MemCompEgg />} />
    </Routes>
    </BrowserRouter>
   

 
    
  );
}

export default App;
