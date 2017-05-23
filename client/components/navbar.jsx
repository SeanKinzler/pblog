import React, { Component } from 'react';  
import { Link } from 'react-router-dom';

export default class NavBar extends Component {  
  render() {
    return (
    <nav className="navbar navbar-default">
      <div className="container-fluid" id="navfluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigationbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand brand-link" href="/">
            <img alt="Brand" className="brand-logo" src="/src/flag.png"></img>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navigationbar">
          <ul className="nav navbar-nav nav-ul">
            <li id="nav1"><a onClick={() => {browserHistory.push('/')}} >Button1</a></li>
            <li id="nav2"><a onClick={() => {browserHistory.push('/')}} >Button2</a></li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
};