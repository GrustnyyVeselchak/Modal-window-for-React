import logo from './logo.svg';
import './App.css';
import TestModalWindow from './TestModalWindow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestModalWindow/> 
      </header>
    </div>
  );
}

export default App;
