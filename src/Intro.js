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
        <Step id="welcome" x={1100} y={800} z={2000}>
          <center>
            <div className="App-header">
              <img src={logo} className="App-logo" alt="React logo" />
              <div>Welcome to React!</div>
            </div>
          </center>
        </Step>
        <Step id="what-is-react" x={0} y={100} rotate={-20}>
          <Card>
            <CardContent>
              <img
                alt="React logo"
                src={reactLogo}
                className="Full-width"
                style={{ width: 300 }}
              />
              <span
                style={{
                  color: 'blue',
                  position: 'absolute',
                  top: 35,
                  right: 480,
                  fontFamily: "'Gloria Hallelujah', cursive",
                  fontSize: 100,
                  transform: 'rotate(20deg)',
                  opacity: 0.5,
                }}
              >
                ?
              </span>

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
            </CardContent>
          </Card>
        </Step>
        <Step id="jquery-counter" x={800} y={-400} z={-500} rotate={0}>
          <h4>Let's build a simple counter</h4>
          <JQueryCounter />
        </Step>
        <Step id="react-counter" x={800} y={300} z={-500} rotate={0}>
          <h4>Counter v2, using React</h4>
          <ReactCounter />
        </Step>
        <Step id="counter-comparison" x={1400} y={0} z={500} rotate={10}>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <img
                alt="Small jQuery diagram"
                src={jquerySmall}
                className="Full-width"
                style={{ flex: 1 }}
              />
              <img
                alt="Small React diagram"
                src={reactSmall}
                className="Full-width"
                style={{ flex: 1 }}
              />
            </div>

            <div style={{ flex: 1, fontSize: 20 }}>
              <Card style={{ marginBottom: 32 }}>
                <CardContent>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: 8 }}>In the</span>
                    <img
                      alt="jQuery logo"
                      src={jqueryLogo}
                      className="Full-width"
                      style={{ width: 200 }}
                    />
                    <span> example, we:</span>
                  </div>

                  <ul>
                    <li>Create DOM elements in HTML</li>
                    <li>Set initial state for counter</li>
                    <li>Set up event handlers which:</li>
                    <ul>
                      <li>Update counter state</li>
                      <li>Find counter element from DOM</li>
                      <li>Update counter to reflect state</li>
                    </ul>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: 8 }}>In the</span>
                    <img
                      alt="React logo"
                      src={reactLogo}
                      className="Full-width"
                      style={{ width: 120 }}
                    />
                    <span style={{ marginLeft: 8 }}> example, we:</span>
                  </div>
                  <ul>
                    <li>Set initial state for counter</li>
                    <li>Set up event handlers which:</li>
                    <ul>
                      <li>Update counter state</li>
                    </ul>
                    <li>
                      Describe the UI in <code>render()</code>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Step>
        <Step id="counter-comparison-2" x={1400} y={600} z={100} rotate={10}>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }} />
            <div style={{ flex: 2, fontSize: 20 }}>
              <Card>
                <CardContent>
                  <h4>React handles DOM manipulation for us!</h4>
                  <ul>
                    <li>Based on the state we provide it</li>
                    <li>
                      And the user interface we have described in the{' '}
                      <code>render()</code> method
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Step>
        <Step id="large-app-comparison" x={2500} y={200} z={-500} rotate={10}>
          <div style={{ display: 'flex' }}>
            <Card>
              <CardContent>
                <h4>The benefits show in larger apps...</h4>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ flex: 1 }}>
                    <img
                      alt="jQuery logo"
                      src={jqueryLogo}
                      className="Full-width"
                    />
                  </div>
                  <div style={{ flex: 4 }}>
                    <img
                      alt="Large jQuery diagram"
                      src={jqueryBig}
                      className="Full-width"
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ flex: 1 }}>
                    <img
                      alt="React logo"
                      src={reactLogo}
                      className="Full-width"
                    />
                  </div>
                  <div style={{ flex: 4 }}>
                    <img
                      alt="Large React diagram"
                      src={reactBig}
                      className="Full-width"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Step>
        <Step id="virtual-dom-1" x={2500} y={-500} z={-200} rotate={-5}>
          <h4>It gets even better: Virtual DOM</h4>
          <Card style={{ marginBottom: 32, fontSize: 30 }}>
            <CardContent>
              <ul>
                <li>Manual DOM manipulation is hard and bug prone</li>
                <li>Naive implementations may do a lot of extra DOM updates</li>
              </ul>
              <Typography className={this.props.classes.title}>
                Each DOM update potentially causes the browser to:
              </Typography>
              <ul>
                <li>Recalculate CSS styles</li>
                <li>
                  Recalculate the entire layout <b>(slow)</b>
                </li>
                <li>Repaint elements</li>
                <li>Composite elements</li>
                <li>...?</li>
              </ul>
            </CardContent>
          </Card>
        </Step>

        <Step id="virtual-dom-2" x={3400} y={-200} z={-200} rotate={-10}>
          <h4>React uses Virtual DOM</h4>
          <Card style={{ marginBottom: 32, fontSize: 30 }}>
            <CardContent>
              <Typography className={this.props.classes.title}>
                Virtual DOM aims to improve performance by:
              </Typography>
              <ul>
                <li>Bundling together multiple DOM updates</li>
                <li>Comparing new state to old, then:</li>
                <ul>
                  <li>Making only the necessary DOM updates</li>
                </ul>
              </ul>
            </CardContent>
          </Card>
          <Card style={{ marginBottom: 32, fontSize: 30 }}>
            <CardContent>
              <Typography className={this.props.classes.title}>
                All this happens automatically behind the scenes...
              </Typography>
              <ul>
                <li>
                  And we don't need to care about it!{' '}
                  <span
                    style={{
                      color: 'blue',
                      position: 'absolute',
                      marginLeft: 32,
                      fontFamily: "'Gloria Hallelujah', cursive",
                      fontSize: 64,
                      transform: 'rotate(90deg)',
                      opacity: 0.5,
                    }}
                  >
                    :)
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Step>
      </div>
    );
  }
}

export default withStyles(styleSheet)(Intro);
