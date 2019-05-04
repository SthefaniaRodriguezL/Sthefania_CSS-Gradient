import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//components
import Buttons from './components/buttons';
import buttons from '../dist/buttons.css';

class App extends React.Component {

  render() {
    return (
		  <div>
        <div><h1>CSS GRADIENT</h1></div>
         <h4>Gradient Generator for Linear and Radial CSS Color Gradients</h4>
          <Buttons />
           <div><canvas id="canvas" width="300" height="300"></canvas></div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
