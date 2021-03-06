import React, { Component } from 'react';
import './style.css';
//import TempPrompt from "./TempPrompt";
//import './script.js';

class App extends Component {
//function App() {
  render() {
  return (

  <html>
    <head>
      <link rel="stylesheet" href="style.css"></link>
      <script src="script.js"></script>
    </head>

    <body id="body">
      <br />
      <h1>TempConverter</h1>
      <h5>version 1.0.1</h5>
      <h4>Fahrenheit | Celsius | Kelvin</h4>

      <p id="instructions">
        <br/><br/>
          Click below to enter the temperature you want to convert.
        <br/><br/>
      </p>
      
      <button type="button" onClick="tempPrompt()">
        Click Here to Convert</button>
      
      <br/><br/>

      <p id="result">
        <br/>
      </p>

      <p id="final">
        <br/>
      </p>

    </body>

    <footer><br/>TempConverter v1.0.1 by z3m0n. JS WebApp. Copyright 2019. All rights reserved.</footer>

  </html>

  );
  }
}

function tempPrompt() {

  let temp1 = prompt("Enter temperature to convert (number only)", 98.6);

  if (temp1 !== null) {
    //var temp2 = temp.parseFloat();
    document.getElementById("result").innerHTML = 
    "You entered: " + temp1 + "\xB0";
  }

  let scalePrompt1 = prompt("Enter original temperature scale", "F, C, or K");
  let origScale = scalePrompt1.toUpperCase();

  if (origScale !== null) {
    //if (origScale == 'F' || origScale == 'C' || origScale == 'K') {
      document.getElementById("result").innerHTML = 
      "You entered: " + temp1 + "\xB0" + origScale;
    //}
  }
  else alert("Invalid input. Enter F, C, or K");
    
  let scalePrompt2 = prompt("Enter temperature to convert to", "F, C, or K");
  let newScale = scalePrompt2.toUpperCase();

  // Parse the temp into a float from string & do conversion
  let temp = parseFloat(temp1);
  let newTemp = convert(temp, origScale, newScale);
  // Display converted temperature
  document.getElementById("final").innerHTML = 
  "Your converted temperature is: " + newTemp.toFixed(2) + "\xB0" + newScale;

  return;
}

function convert(temp, origScale, newScale) {

  let newTemp = 0;
  //let continueLoop = true;

  if (origScale === 'F') {
    switch (newScale) {
      case 'F':
        break;
      case 'C':
        newTemp = (5.0/9.0) * (temp - 32);
        break;
      case 'K':
        newTemp =  (5.0/9.0) * (temp - 32) + 273.15;
        break;
      default:
        alert("Invalid input. Enter F, C, or K");
    }
  }

  else if (origScale === 'C') {
    switch (newScale) {
      case 'F':
        newTemp = (9.0/5.0) * temp + 32.0;
        break;
      case 'C':
        break;
      case 'K':
        newTemp = temp + 273.15;
        break;
      default:
        alert("Invalid input. Enter F, C, or K");
    }
  }

  else if (origScale === 'K') {
    switch (newScale) {
      case 'F':
        newTemp = (9.0/5.0) * (temp + 32.0) - 273.15; 
        break;
      case 'C':
        newTemp = temp - 273.15;
        break;
      case 'K':
        break;
      default:
        alert("Invalid input. Enter F, C, or K");
    }
  }
  else alert("Invalid input. Enter F, C, or K");

  return newTemp;
}

export default App;
