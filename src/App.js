import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="left">
          <p><span>Karen</span></p>
        </div>
        <nav>
          <div className="App-header-links">
            <ul>
              <li><a href="#App">About</a></li>
              <li><a href="#App">Projects</a></li>
              <li><a href="#App">Talks</a></li>
              <li><a href="#App">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
      {/* <body> */}
        <p>This is the body</p>
      {/* </body> */}
      <footer>
        Karen inc 2020
      </footer>
    </div>
  );
}

export default App;
