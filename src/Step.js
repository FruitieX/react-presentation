import React, { Component } from 'react';

import './App.css';

class Step extends Component {
  render() {
    const {
      children,
      x,
      y,
      z,
      rotate,
      rotateX,
      rotateY,
      rotateZ,
      scale,
      ...rest
    } = this.props;
    return (
      <div
        className="step"
        style={{ transform: 'translateZ(0)' }}
        data-x={x}
        data-y={y}
        data-z={z}
        data-rotate={rotate}
        data-rotate-x={rotateX}
        data-rotate-y={rotateY}
        data-rotate-z={rotateZ}
        data-scale={scale}
        {...rest}
      >
        {children}
      </div>
    );
  }
}

export default Step;
