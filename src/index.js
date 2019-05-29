import React from "react";
import ReactDOM from "react-dom";

import "./styles/styles.css";

import ElementExample from './components/ElementExample/ElementExample';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h1>Buttons</h1>
      <p>Buttons and their properties</p>

      <ElementExample title='Standard Button' text=''>
        <Button text="Button" className="clear" />
      </ElementExample>

      <ElementExample title='Branding Variations' text=''>
        <Button text="Button" className="primary clear" />
        <Button text="Button" className="secondary clear" />
        <Button text="Button" className="tertiary clear" />
      </ElementExample>

      <ElementExample title='Colour Variations' text=''>
        <Button text="Button" className="red clear" />
        <Button text="Button" className="yellow clear" />
        <Button text="Button" className="blue clear" />
        <Button text="Button" className="purple clear" />
        <Button text="Button" className="black clear" />
        <Button text="Button" className="white clear" />
        <Button text="Button" className="green clear" />
        <Button text="Button" className="pink clear" />
      </ElementExample>

      <ElementExample title='Button Sizes' text=''>
        <Button text="Button" className="small clear" />
        <Button text="Button" className="medium clear" />
        <Button text="Button" className="large clear" />
        <Button text="Button" className="xlarge clear" />
      </ElementExample>

      <ElementExample title='Tag' text=''>
        <Button text="Tag" className="tag small clear" />
        <Button text="Tag" className="tag small primary clear" />
        <Button text="Tag" className="tag small secondary clear" />
        <Button text="Tag" className="tag small tertiary clear" />
      </ElementExample>

      <ElementExample title='Headers' text=''>
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <h5>Header 5</h5>
        <h6>Header 6</h6>
      </ElementExample>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
