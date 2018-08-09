import React from "react";
import ReactDOM from "react-dom";

// Import all styles here for now
import "./styles.css";
import "./colors.css";

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
