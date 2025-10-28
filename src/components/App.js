import React, { useState } from "react";
import './../styles/App.css';
import {useState} from 'react';

const App = (props) => {
  const [isVisible,setIsVisible]=useState(false);
  const handleClick = () => {
    setIsVisible(true);
  };
  return (
    <div className="App" id="main">
      // Do not alter the main div
      <p id="para" className={isVisible ? "show" : "hide"}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App
