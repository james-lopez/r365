import React from 'react';
import './App.css';
import Challenge1 from './challenge1';
import Challenge2 from './challenge2';
import Challenge3 from './challenge3';
import Challenge4 from './challenge4';
import Challenge5 from './challenge5';
import Challenge6 from './challenge6';
import Challenge7 from './challenge7';
import Challenge8 from './challenge8';

function App() {
  return (
    <div className="App">
      <header className="app__header">
        <h1><span className="app__title">Restaurant365</span> Calculator Challenge</h1>
      </header>
      <div className="app__content">
        <Challenge1/>
        <Challenge2/>
        <Challenge3/>
        <Challenge4/>
        <Challenge5/>
        <Challenge6/>
        <Challenge7/>
        <Challenge8/>
      </div>
    </div>
  );
}

export default App;