import React from 'react';

export default class Counter extends React.Component {
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
        <div style={{ textAlign: 'center' }}>
          {this.state.value}
        </div>
        <button
          style={{ marginRight: 8, width: 32, height: 32 }}
          onClick={this.increment}
        >
          +
        </button>
        <button
          style={{ marginRight: 8, width: 32, height: 32 }}
          onClick={this.decrement}
        >
          -
        </button>
      </div>
    );
  }
}
