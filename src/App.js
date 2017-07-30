import React, { Component } from 'react';

import 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-jsx';

import 'typeface-roboto';
import 'typeface-gloria-hallelujah';

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
        <Intro />
      </div>
    );
  }
}

export default App;
