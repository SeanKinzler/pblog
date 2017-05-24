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
            <li className="nav1 dropdown">
              <a className="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Action you can take
                <span className="caret"></span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
            <li id="nav2"><a>About Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
};