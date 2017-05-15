import React, { Component } from 'react';  
// import { browserHistory, DefaultRoute, IndexRoute, Link, Route, RouteHandler, Router} from 'react-router';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './config/routes.jsx';
import store from './store/createStore.js';


render((
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
  ), document.getElementById('App'));

