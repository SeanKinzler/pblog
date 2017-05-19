import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import store from '../store/createStore.js';
import checkToken from '../components/checkToken.jsx';

axios.defaults.headers.common['jwt'] = localStorage.token;
export const PrivateRoute = ({component: Component, ...rest}) => {
  let state = store.getState();
  if (state.auth.authenticated) {
    return (<Route {...rest} render={props => (
      <Component {...props} />
      )} />)
  } else {
    return (<Route {...rest} component= {checkToken} compTemp={Component}/>)
  }
};

export const checkAuth = (callback) => {
  return axios.post('/auth/verify').then((res, err) => {
    if (res) {
      localStorage.name = res.data;
      callback(true);
    } else {
      callback(false);
    }
  }).catch(err => {
    console.log('Authentication Error', err);
    callback(false);
  });
};


