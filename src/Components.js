import React, { Component } from 'react';

import Counter from './examples/Counter';
import { PrismCode } from 'react-prism';
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
    fontSize: 30,
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
              <Typography className={this.props.classes.title}>
                So far we have only dealt with one component at a time: the
                Counter
              </Typography>
              <ul style={{ fontSize: 30 }}>
                <li>Components are an important concept in React</li>
                <li>They allow us to split our app into logical parts</li>
                <li>
                  Components are <b>reusable</b>, can reduce code duplication
                </li>
              </ul>
            </CardContent>
          </Card>
        </Step>
        <Step id="components-counters" x={500} y={1200} z={700} rotate={5}>
          <Card>
            <CardContent>
              <h4>Let's try rendering a list of Counters!</h4>
              <PrismCode component="pre" className="language-jsx">
                {`class CounterContainer extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}`}
              </PrismCode>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ paddingRight: 32 }}>
                  <Counter />
                </div>
                <div style={{ paddingRight: 32 }}>
                  <Counter />
                </div>
                <div style={{ paddingRight: 32 }}>
                  <Counter />
                </div>
              </div>
            </CardContent>
          </Card>
        </Step>
      </div>
    );
  }
}

export default withStyles(styleSheet)(Intro);
