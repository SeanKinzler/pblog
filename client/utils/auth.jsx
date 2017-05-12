import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
  return (<Route {...rest} render={props => (
      checkAuth() ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{pathname: '/'}} />
      )
    )}
  />)
};

const checkAuth = (callback) => {
  console.log('checkAuth');
  return true;
};

module.exports = {
  PrivateRoute,
  checkAuth,

}