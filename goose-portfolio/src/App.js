import './App.css';
import Header from './Components/Header/Header';
import EggSection from './Components/EggSection/EggSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
         <Header className="Header"/>
         <EggSection className="EggSection"/>
        </p>
        
      </header>
    </div>
  );
}

export default App;
