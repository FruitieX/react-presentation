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

const styleSheet = createStyleSheet('Components', theme => ({
  title: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 30,
    lineHeight: 1.25,
    color: theme.palette.text.secondary,
  },
  codeContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  code: {
    padding: 16,
    flex: 1,
  },
}));

class Components extends Component {
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
                <li>
                  They can be nested as we'll see in the next example...
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
                {`// Import the Counter component we implemented before in another file
import Counter from './Counter';

class CounterContainer extends Component {
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
        <Step id="components-case-sensitive" x={50} y={1200} z={720} rotateY={2} rotateZ={7}>
          <div style={{width: 400}}>
            <Card>
              <CardContent>
            <h5
              style={{
                color: 'blue',
                fontFamily: "'Gloria Hallelujah', cursive",
                fontSize: 48,
                opacity: 0.5,
              }}
            >
            Note on case-sensitivity
            </h5>
            <ul
              style={{
                fontSize: 28,
              }}
            >
              <li>Element names are <b>case sensitive</b></li>
              <li>React assumes that names starting with:</li>
              <ul
              style={{
                fontSize: 22,
              }}
                >
                <li>An <b>upper-case</b> letter are <b>React components</b></li>
                <li>A <b>lower-case</b> letter are <b>normal HTML elements</b></li>
              </ul>
              <li>So remember to capitalize the first letter in your React components!</li>
            </ul>
            <div
              style={{
                color: 'blue',
                width: 300,
                left: 700,
                top: 280,
                position: 'absolute',
                fontFamily: "'Gloria Hallelujah', cursive",
                fontSize: 32,
                textAlign: 'center',
                transform: 'rotate(-10deg)',
                opacity: 0.5,
              }}
            >
              &lt;- Components
            </div>
            <div
              style={{
                color: 'blue',
                width: 300,
                left: 650,
                top: 410,
                position: 'absolute',
                fontFamily: "'Gloria Hallelujah', cursive",
                fontSize: 32,
                textAlign: 'center',
                transform: 'rotate(16deg)',
                opacity: 0.5,
              }}
            >
              &lt;- HTML element
            </div>

              </CardContent>
            </Card>
          </div>
        </Step>
        <Step id="components-parts" x={1400} y={1200} z={700} rotate={7}>
          <Card>
            <CardContent>
              <h4>Components split the app into logical parts</h4>
              <ul style={{ fontSize: 30 }}>
                <li>Development work can easily be split up accordingly</li>
                <li>Components are independent from each other</li>
                <li>TODO: diagram</li>
              </ul>
            </CardContent>
          </Card>
        </Step>
        <Step id="components-props" x={1500} y={1800} z={900} rotate={-7}>
          <Card style={{ width: 900 }}>
            <CardContent>
              <h4>Component properties or "props"</h4>
              <ul style={{ fontSize: 26 }}>
                <li>We can pass key/value pairs known as <b>props</b> to components</li>
                <li>This is useful for passing <b>data</b> & <b>functions</b> to child components</li>
                <li>Children receive props as a JS object called <code>this.props</code></li>
              </ul>
              <div className={this.props.classes.codeContainer}>
                <div className={this.props.classes.code}>
                  <PrismCode component="pre" className="language-jsx">
                    {`class TextDisplay extends Component {
  render() {
    return <div>{ this.props.text }</div>;
  }
}

const sampleText = 'Testing 1, 2';
class TextContainer extends Component {
  render() {
    return
      <div>
        <TextDisplay text="Yay this works!" />
        <TextDisplay text={sampleText} />
      </div>;
  }
}`}
                  </PrismCode>
                </div>
                <div className={this.props.classes.code}>
                  <PrismCode component="pre" className="language-html">
                    {`<div>
  <div>
    Yay this works!
  </div>
  <div>
    Testing 1, 2
  </div>
</div>`}
                  </PrismCode>
                </div>
              </div>
            </CardContent>
          </Card>
        </Step>
      </div>
    );
  }
}

export default withStyles(styleSheet)(Components);
