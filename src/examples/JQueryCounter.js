import React, { Component } from 'react';
import { PrismCode } from 'react-prism';

import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import '../App.css';

import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('JQueryCounter', theme => ({
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

class JQueryCounter extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography type="headline" component="h2">
            jQuery
          </Typography>
          <div className={this.props.classes.codeContainer}>
            <div className={this.props.classes.code}>
              <Typography
                type="body1"
                className={this.props.classes.title}
                component="p"
              >
                HTML
              </Typography>
              <PrismCode component="pre" className="language-html">
                {`<div id="counter">0</div>

<a onclick="increment()"> + </a>
<a onclick="decrement()"> - </a>`}
              </PrismCode>

              <Typography
                type="body1"
                className={this.props.classes.title}
                component="p"
              >
                Result
              </Typography>
              <iframe
                height="140"
                scrolling="no"
                title="JyGOoX"
                src="//codepen.io/FruitieX/embed/JyGOoX/?height=116&theme-id=0&default-tab=result&embed-version=2"
                frameBorder="no"
                allowTransparency="true"
                allowFullScreen="true"
                style={{ width: '100%' }}
              >
                See the Pen{' '}
                <a href="https://codepen.io/FruitieX/pen/JyGOoX/">JyGOoX</a> by
                Rasmus Eskola (<a href="https://codepen.io/FruitieX">
                  @FruitieX
                </a>) on <a href="https://codepen.io">CodePen</a>.
              </iframe>
            </div>
            <div className={this.props.classes.code}>
              <Typography
                type="body1"
                className={this.props.classes.title}
                component="p"
              >
                JavaScript
              </Typography>
              <PrismCode component="pre" className="language-javascript">
                {`var value = 0;

function increment() {
  value += 1;
  $('#counter').text(value);
}

function decrement() {
  value -= 1;
  $('#counter').text(value);
}`}
              </PrismCode>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styleSheet)(JQueryCounter);
