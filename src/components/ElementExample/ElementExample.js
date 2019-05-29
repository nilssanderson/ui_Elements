import React, { Component } from 'react';
import { renderToStaticMarkup } from 'react-dom/server'
import Code from '../Code/Code';

import "./ElementExample.css";

class ElementExample extends Component {
  render() {
    const {
      title,
      elements,
      text,
      children
    } = this.props;

    let className = this.props.className ? ' ' + this.props.className : '';
    let code = renderToStaticMarkup(children);
    // Need to break the code on to multiple lines
    let updatedCode = code.replace(/></g, ">\n<");

    return (
      <section className={'element-example' + className}>
        <h2 className="underline">{title}</h2>
        <div className="elements">
          <div className="element">
            {children}
          </div>
          <div className="element">
            <Code>{updatedCode}</Code>
          </div>
        </div>
      </section>
    )
  }
}

export default ElementExample;