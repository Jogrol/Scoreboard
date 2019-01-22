import React, { Component } from 'react';
import Title from './Title.js';
import Scorebord from './Scoreboard.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title content="Welcome, what is the score?"/>
          <Scorebord/>
        </header>
      </div>
    );
  }
}

export default App;