import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar.jsx';
export default class Home extends Component {
  constructor (props) {
    super(props);
    this.props = props;
  }

  render() {
    if (this.props.match.params.accessDenied !== undefined) {
      return (
          <div>
            <h3>ACCESS DENIED</h3>
            hello Home
          </div>
        )
    }
    return (
      <div>
        <Navbar />
        <br />
        hello Home
      </div>
    );
  }
}