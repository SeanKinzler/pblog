import React, { Component } from 'react';  
// import { browserHistory, DefaultRoute, IndexRoute, Link, Route, RouteHandler, Router} from 'react-router';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { render } from 'react-dom';

import Routes from './config/routes.jsx';
render((
  <Router>
    <Routes />
  </Router>
  ), document.getElementById('App'));

