import React, { Component } from 'react';  
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import Home from '../components/home.jsx';
import AddStory from '../components/addStory.jsx';
import AdminMenu from '../components/adminMenu.jsx';
import EditArticles from '../components/editArticles.jsx';
import jwt from '../components/jwt.jsx';
import { PrivateRoute } from '../utils/auth.jsx';
import ArticleRender from '../components/ArticleRender.jsx';

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (<div>
      <Route exact path='/' component={ Home } />
      <Route path='/failedLogin' component={ Home } />
      <PrivateRoute path='/addStory' component={ AddStory }/>
      <PrivateRoute path='/adminMenu' component={ AdminMenu }/>
      <PrivateRoute path='/editArticles' component={ EditArticles }/>
      <Route path='/jwt/:token' component={ jwt } />
      <Route path='/articles/:slug' component={ ArticleRender } />
    </div>)
  }
}