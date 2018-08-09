import React from "react";
import ReactDOM from "react-dom";

import "./styles/styles.css";

import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button text="Button" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
