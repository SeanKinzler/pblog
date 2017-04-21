import React, { Component } from 'react';  

export default class App extends Component {
  render() {
    return (
      <div>
        Hello World
        {this.props.children  }
      </div>
    )
  }
    
};