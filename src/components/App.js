import React from 'react';
import './App.css';
import Challenge1 from './challenge1';
import Challenge2 from './challenge2';
import Challenge3 from './challenge3';

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
      </div>
    </div>
  );
}

export default App;