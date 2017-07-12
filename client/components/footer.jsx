import React, { Component } from 'react';  
import { Link } from 'react-router-dom';
import TakeAction from './takeAction.jsx';
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.mobileFooterClick = this.mobileFooterClick.bind(this);
  }

  mobileFooterClick () {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  }

  render() {
    return (
    <nav className="navbar navbar-default" id="footer">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" 
          data-target="#footerbar" onClick={this.mobileFooterClick}>
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand brand-link" id="footer-brand-link" href="/">
            <img alt="Brand" className="brand-logo" id="footer-brand-logo" src="/src/logo.png"></img>
          </a>
        </div>
        <div className="collapse navbar-collapse show-footer" id="footerbar">
          <ul className="nav navbar-nav nav-ul">
            <li className="nav1 dropup">
              <a className="dropdown-toggle" id="dropdown-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Take action
                <span className="caret"></span>
              </a>
              <TakeAction />
            </li>
            <li id="nav2"><a href='/about'>About Us</a></li>
            <li id="nav2"><a href='/about#writer'>Write For Policure</a></li>
          </ul>
          <ul className="nav navbar-nav nav-ul navbar-right">
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