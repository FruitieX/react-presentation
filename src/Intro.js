import React, { Component } from 'react';

import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import Step from './Step';

import JQueryCounter from './examples/JQueryCounter';
import ReactCounter from './examples/ReactCounter';

import jquerySmall from './assets/jquery-small.svg';
import jqueryBig from './assets/jquery-big.svg';
import reactSmall from './assets/react-small.svg';
import reactBig from './assets/react-big.svg';

import logo from './assets/react-logo.png';
import './App.css';

class Intro extends Component {
  render() {
    return (
      <div>
        <Step id="welcome" x={1100} y={1000} z={2000}>
          <center>
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <div>Welcome to React!</div>
            </div>
          </center>
        </Step>
        <Step id="what-is-react" x={0} y={100} rotate={-20}>
          <h1>React?</h1>

          <ul>
            <li>JS library for rendering user interfaces</li>
            <li>Maintained by Facebook</li>
            <li>Reusable components</li>
            <li>Core idea:</li>
          </ul>
          <center>
            <code>
              {'App State => User Interface'}
            </code>
          </center>
        </Step>
        <Step id="jquery-counter" x={800} y={-400} z={-500} rotate={-40}>
          <h4>Let's build a simple counter</h4>
          <JQueryCounter />
        </Step>
        <Step id="react-counter" x={1300} y={100} z={-500} rotate={-40}>
          <h4>Counter v2, using React</h4>
          <ReactCounter />
        </Step>
        <Step id="counter-comparison" x={1600} y={-800} z={500} rotate={-50}>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <img
                src={jquerySmall}
                className="Full-width"
                style={{ flex: 1 }}
                alt="logo"
              />
              <img
                src={reactSmall}
                className="Full-width"
                style={{ flex: 1 }}
                alt="logo"
              />
            </div>

            <div style={{ flex: 1 }}>
              <h4>jQuery</h4>

              <ul>
                <li>Setup event handlers</li>
                <li>=> Manual DOM manipulation</li>
              </ul>

              <h4>React</h4>

              <ul>
                <li>Setup event handlers</li>
                <li>
                  => <b>State</b> manipulation
                </li>
                <li>Automatically updates DOM to reflect state</li>
              </ul>
            </div>
          </div>
        </Step>
      </div>
    );
  }
}

export default Intro;
