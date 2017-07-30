import React, { Component } from 'react';

// Load any languages you want to use
// (see https://github.com/isagalaev/highlight.js/tree/master/src/languages)
import js from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/xml';

import 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-jsx';

import 'typeface-roboto';

import 'impress.js';
import './Impress.css';
import './github.css';

import Intro from './Intro';

class App extends Component {
  componentDidMount() {
    window.impress().init();
  }

  render() {
    return (
      <div id="impress">
        <link
          href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah"
          rel="stylesheet"
        />
        <Intro />
      </div>
    );
  }
}

export default App;
