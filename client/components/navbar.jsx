import React, { Component } from 'react';  
import { Link } from 'react-router-dom';
import TakeAction from './takeAction.jsx';

export default class NavBar extends Component {  
  render() {
    return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigationbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand brand-link" id="nav-brand-link" href="/">
            <img alt="Brand" className="brand-logo" id="nav-brand-logo" src="/src/logo.png"></img>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navigationbar">
          <ul className="nav navbar-nav nav-ul navbar-right">
            <li className="nav1 dropdown">
              <a className="dropdown-toggle" id="dropdown-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Take action
                <span className="caret"></span>
              </a>
              <TakeAction />
            </li>
            <li className="login-button">
              <a href='/subscribe'>Subscribe</a>
            </li>
            <li className="socialMediaButton">
              <a href="https://www.facebook.com/PoliCure-321007481646272/">
                <i className="fa fa-facebook"></i> 
              </a>
            </li>
            <li className="socialMediaButton">
              <a href="https://twitter.com/PoliCure">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
};