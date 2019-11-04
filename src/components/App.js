import React from 'react';
import './App.css';
import Challenge1 from './challenge1';

function App() {
  return (
    <div className="App">
      <header className="app__header">
        <h1><span className="app__title">Restaurant365</span> Calculator Challenge</h1>
      </header>
      <div className="app__content">
        <Challenge1/>
      </div>
    </div>
  );
}

export default App;