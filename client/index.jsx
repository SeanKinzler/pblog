import React, { Component } from 'react';  
// import { browserHistory, DefaultRoute, IndexRoute, Link, Route, RouteHandler, Router} from 'react-router';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { render } from 'react-dom';
import Home from './components/home.jsx';
import AddStory from './components/addStory.jsx';
import Login from './components/login.jsx';
render((
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/main' component={Home} />
      <Route path='/addstory' component={AddStory} />
      <Route path='/login' component={Login} />
    </div>
  </Router>
  ), document.getElementById('App'));
