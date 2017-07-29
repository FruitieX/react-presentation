import React, { Component } from 'react';
import Lowlight from 'react-lowlight';

import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

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
        <Step id="what-is-react" x={1100} y={600} rotate={20} scale={0.5}>
          <h1>React?</h1>

          <ul>
            <li>JS library for rendering user interfaces</li>
            <li>Maintained by Facebook</li>
            <li>Core idea:</li>
          </ul>
          <center>
            <code>
              {'App State => User Interface'}
            </code>
          </center>
        </Step>
        <Step id="step-back" x={1500} y={1000} rotate={40} scale={0.5}>
          <h4>This is how we used to do things</h4>
          <h6>(and still might):</h6>

          <Card>
            <CardContent>
              <Typography type="headline" component="h2">
                jQuery
              </Typography>
              <Lowlight language="js" value="var foo = 'bar';" />
            </CardContent>
          </Card>
        </Step>
      </div>
    );
  }
}

export default App;
