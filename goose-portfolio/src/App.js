import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Header from './Components/Header/Header';
import EggSection from './Components/EggSection/EggSection';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer';
import LottoGenEgg from './Components/LottoGenEgg/LottoGenEgg';
import TipsyEgg from './Components/TipsyEgg/TipsyEgg';
import MemCompEgg from './Components/MemCompEgg/MemCompEgg';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/lotto-gen" element={<LottoGenEgg />} />
      <Route path="/git-tipsy" element={<TipsyEgg />} />
      <Route path="/mem-comp" element={<MemCompEgg />} />
    </Routes>
    
    <div className="App">
      <header className="App-header">
        
        <p>
         <Header className="Header"/>
         <EggSection className="EggSection"/>
         <Projects className="Projects"/>
         <Skills className="Skills"/>
         <Footer className="Footer"/>

        </p>
        
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
