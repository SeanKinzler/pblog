import React, { Component } from 'react';  
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/createStore.js';
import Routes from './config/routes.jsx';
import createHistory from 'history/createBrowserHistory';
import Analytics from './config/analytics.jsx';

const history = createHistory();
history.listen((location, action) => {
  console.log('location: ', location);
  console.log('action: ', action);
})
render((
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Analytics history={history}/>
        <Routes hist={history}/>
      </div>
    </Router>
  </Provider>
  ), document.getElementById('App'));

