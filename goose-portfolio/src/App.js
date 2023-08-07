import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import EggSection from './Components/EggSection/EggSection';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    // <browserRouter>
    //   <Switch>
    //     <Route exact path="/" component={Projects} />
    //     <Route exact path="/Egg/:id" component={EggDetails} />
    //     </Switch>
    // </browserRouter>

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
  );
}

export default App;
