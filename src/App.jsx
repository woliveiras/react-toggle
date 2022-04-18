import logo from './logo.svg';
import './App.css';
import { toggler } from './infra/toggle'
import { useEffect, useState } from 'react';

function App() {
  const [showReactLogo, setShowReactLogo] = useState(false)

  useEffect(() => {
    toggler
      .getValueAsync("show_react_logo",  false)
      .then( value => {
        setShowReactLogo(value)
      });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        { showReactLogo && <img src={logo} className="App-logo" alt="logo" /> }
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
