import React, { Component } from 'react';

import Step from './Step';

import logo from './assets/react-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Step id="welcome" x={0} y={0} scale={1}>
          <center>
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <div>Welcome to React!</div>
            </div>
          </center>
        </Step>
        <Step id="welcome-2" x={800} y={60} scale={0.5}>
          <center>React?</center>
        </Step>
      </div>
    );
  }
}

export default App;
