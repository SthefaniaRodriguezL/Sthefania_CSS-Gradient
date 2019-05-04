import React, { Component } from 'react';

class Gradient extends React.Component {
  constructor() {
    super();
    this.state = {
    colors: undefined
    }
    this.getGenerator = this.getGenerator.bind(this);

  }
  componentDidMount() {
    this.getGenerator()
  }
   async getGenerator() {
     const url = 'https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json' ;
     const rsp = await fetch(url);
     console.log(rsp.json());
     //const results = rsp.json()
     //this.setState({colors: results.json()})
    }
  render() {
    //console.log(this.state.colors);
      //<button onclick={this.state.colors.map(Linear)}><li>Linear</li></button>
    return (
      <div>

        </div>
    );
  }

}
export default Gradient;
