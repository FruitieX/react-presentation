import React, { Component } from 'react';

import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

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
              <PrismCode component="pre" className="language-jsx">
                {`class Counter extends Component {
  state = { value: 0 }; // Initial state

  increment() {
    this.setState({ value: this.state.value + 1 });
  }

  decrement() {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
      <div>
        <a onClick={this.increment()}> + </a>
        <a onClick={this.decrement()}> - </a>
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
