import logo from './logo.svg';
import './App.css';
import logo2 from './tony-stark.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} className="App-logo" alt="logo"/>
        <p>
          GUILLERMO SIFUENTES MONTOYA
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          GRUPO 8 EL MEJOR
        </a>        
      </header>
    </div>
  );
}

export default App;
