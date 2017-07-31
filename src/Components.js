import React, { Component } from 'react';

import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import Step from './Step';

import JQueryCounter from './examples/JQueryCounter';
import ReactCounter from './examples/ReactCounter';

import jqueryLogo from './assets/jquery-logo.png';
import reactLogo from './assets/react-logo.png';

import jquerySmall from './assets/jquery-small.svg';
import jqueryBig from './assets/jquery-big.svg';
import reactSmall from './assets/react-small.svg';
import reactBig from './assets/react-big.svg';

import logo from './assets/react-logo.png';
import './App.css';

import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('Intro', theme => ({
  title: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 32,
    lineHeight: 1.25,
    color: theme.palette.text.secondary,
  },
}));

class Intro extends Component {
  render() {
    return (
      <div>
        <Step id="components" x={-200} y={600} z={500} rotate={5}>
          <Card>
            <CardContent>
              <center>
                <div className="App-header">
                  <div>Components</div>
                </div>
              </center>
            </CardContent>
          </Card>
        </Step>
      </div>
    );
  }
}

export default withStyles(styleSheet)(Intro);
