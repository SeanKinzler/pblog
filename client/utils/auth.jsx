import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';
import axios from 'axios';

axios.defaults.headers.common['jwt'] = localStorage.token;
const PrivateRoute = ({component: Component, that, ...rest}) => {
  if (!that.state.auth) {
    checkAuth(that).catch(err => {
      console.log(err);
      return (<Route {...rest} render={props => (
        <Redirect to={{pathname: '/'}} />
        )} />)
    });
  }
  console.log('if check: ', that.state.auth)
  if (that.state.auth) {
    return (<Route {...rest} render={props => (
      <Component {...props} />
      )} />)
  } else {
    return (<Route {...rest} render={props => (
      <Redirect to={{pathname: '/'}} />
      )} />)
  }
};

const checkAuth = (that) => {
  return axios.post('/auth/verify').then((res) => {
    if (res) {
      console.log('authenticated');
      localStorage.name = res.data;
      that.updateAuth(true);
      // that.forceUpdate();
      return true;
    } else {
      console.log('failed to authenticate');
      return false;
    }
  })
};

module.exports = {
  PrivateRoute,
  checkAuth,

}