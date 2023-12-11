import logo from './components/logo192.png';
import './App.css';
import TextBar from './components/TextBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TextBar/>
      </header>
    </div>
  );
}

export default App;
