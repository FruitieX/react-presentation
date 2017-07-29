import React, { Component } from 'react';

import 'impress.js';
import './Impress.css';

import Agenda from './Agenda';

class App extends Component {
  componentDidMount() {
    window.impress().init();
  }

  render() {
    return (
      <div id="impress">
        <Agenda />
      </div>
    );
  }
}

export default App;
