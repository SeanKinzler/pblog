import React, { Component } from 'react';  
import { Link } from 'react-router-dom';

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
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
            <li id="nav2"><a href='/about'>Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
};