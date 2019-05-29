import React, { Component } from 'react';

import "./Button.css";

class Button extends Component {
  render() {
    const {
      text
    } = this.props;

    let className = this.props.className ? ' ' + this.props.className : '';

    return (
      <button className={'button' + className}>
        {text}
      </button>
    )
  }
}

export default Button;