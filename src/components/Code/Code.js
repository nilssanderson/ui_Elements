import React, { Component } from 'react';
import Highlight from 'react-highlight';

import "./Code.css";
import "../../../node_modules/highlight.js/styles/monokai.css";

class Code extends Component {
  render() {
    const {
      children
    } = this.props;

    let className = this.props.className ? ' ' + this.props.className : '';

    return (
      <Highlight>{children}</Highlight>
    )
  }
}

export default Code;