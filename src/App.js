import React, { Component } from 'react';

import Lowlight from 'react-lowlight';

// Load any languages you want to use
// (see https://github.com/isagalaev/highlight.js/tree/master/src/languages)
import js from 'highlight.js/lib/languages/javascript';

import 'typeface-roboto';

import 'impress.js';
import './Impress.css';
import './github.css';

import Intro from './Intro';

// Then register them with lowlight
Lowlight.registerLanguage('js', js);

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
