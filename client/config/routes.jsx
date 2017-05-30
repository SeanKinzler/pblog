import React, { Component } from 'react';  
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';

import Home from '../components/home.jsx';
import AddStory from '../components/addStory.jsx';
import AdminMenu from '../components/adminMenu.jsx';
import EditArticles from '../components/editArticles.jsx';
import jwt from '../components/jwt.jsx';
import { PrivateRoute } from '../utils/auth.jsx';
import ArticleRender from '../components/articleRender.jsx';
import AboutUs from '../components/aboutUs.jsx';

const Routes = () => {
  return (
    <div>
      <Navbar />
      <Route exact path='/' component={ Home } />
      <Route path='/accessDenied' component={ Home } />
      <PrivateRoute path='/addStory' component={ AddStory }/>
      <PrivateRoute path='/adminMenu' component={ AdminMenu }/>
      <PrivateRoute path='/editArticles' component={ EditArticles }/>
      <Route path='/jwt/:token' component={ jwt } />
      <Route path='/articles/:slug' component={ ArticleRender } />
      <Route path='/about' component={ AboutUs } />
      <Footer />
    </div>
  )
}

export default Routes;