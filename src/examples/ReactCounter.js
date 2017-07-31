import React, { Component } from 'react';

import Card, { CardContent } from 'material-ui/Card';

import { PrismCode } from 'react-prism';

import '../App.css';

import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('ReactCounter', theme => ({
  title: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 24,
    textAlign: 'center',
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

class ReactCounter extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <div className={this.props.classes.codeContainer}>
            <div className={this.props.classes.code}>
              <span
                style={{
                  color: 'red',
                  fontFamily: "'Gloria Hallelujah', cursive",
                  position: 'absolute',
                  fontSize: 24,
                  top: 200,
                  right: 350,
                  transform: 'rotate(10deg)',
                  opacity: 0.5,
                }}
              >
                &lt;- Initial state
              </span>
              <span
                style={{
                  color: 'red',
                  fontFamily: "'Gloria Hallelujah', cursive",
                  position: 'absolute',
                  fontSize: 24,
                  top: 320,
                  right: 100,
                  transform: 'rotate(10deg)',
                  opacity: 0.5,
                }}
              >
                onClick handlers
              </span>
              <span
                style={{
                  color: 'red',
                  fontFamily: "'Gloria Hallelujah', cursive",
                  position: 'absolute',
                  fontSize: 24,
                  top: 330,
                  right: 280,
                  transform: 'rotate(-30deg)',
                  opacity: 0.5,
                }}
              >
                &lt;-
              </span>
              <span
                style={{
                  color: 'red',
                  fontFamily: "'Gloria Hallelujah', cursive",
                  position: 'absolute',
                  fontSize: 24,
                  top: 280,
                  right: 280,
                  transform: 'rotate(30deg)',
                  opacity: 0.5,
                }}
              >
                &lt;-
              </span>
              <span
                style={{
                  color: 'red',
                  fontFamily: "'Gloria Hallelujah', cursive",
                  position: 'absolute',
                  fontSize: 24,
                  top: 640,
                  right: 100,
                  transform: 'rotate(10deg)',
                  opacity: 0.5,
                }}
              >
                &lt;- Describes the user interface
              </span>
              <PrismCode component="pre" className="language-jsx">
                {`class Counter extends React.Component {
  state = { value: 0 };

  increment = () => {
    this.setState({ value: this.state.value + 1 });
  };

  decrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div>
        <div>{this.state.value}</div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}`}
              </PrismCode>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styleSheet)(ReactCounter);
