import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          This is demo project to learn Docker practices, by Qudais Ashraf.
        </p>
        <a
          className="App-link"
          href="https://qudais.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Qudais Ashraf Portfolio
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
