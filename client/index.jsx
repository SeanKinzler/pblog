import React, { Component } from 'react';  
// import { browserHistory, DefaultRoute, IndexRoute, Link, Route, RouteHandler, Router} from 'react-router';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { render } from 'react-dom';
import Home from './components/home.jsx';
import AddStory from './components/addStory.jsx';
import Login from './components/login.jsx';
import jwt from './components/jwt.jsx';
import { PrivateRoute } from './utils/auth.jsx';

render((
  <Router>
    <div>
      <Route exact path='/' component={ Home } />
      <Route path='/failedLogin' component={ Home } />
      <Route path='/addstory1' component={ AddStory } />
      <PrivateRoute path='/addstory2' component={ AddStory } />
      <Route path='/login' component={ Login } />
      <Route path='/jwt/:token' component={ jwt } />
    </div>
  </Router>
  ), document.getElementById('App'));
