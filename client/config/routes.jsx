import React, { Component } from 'react';  
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';

import Home from '../components/home.jsx';
import AddStory from '../components/addStory.jsx';
import AdminMenu from '../components/adminMenu.jsx';
import EditArticles from '../components/editArticles.jsx';
import jwt from '../components/jwt.jsx';
import adminJwt from '../components/adminJwt.jsx';
import { PrivateRoute, AdminRoute } from '../utils/auth.jsx';
import ArticleRender from '../components/articleRender.jsx';
import AboutUs from '../components/aboutUs.jsx';
import PropsRoute from './propsRoutes.jsx';


const Routes = (props) => {
  return (
    <div>
      <Navbar />
      <PropsRoute exact path='/' hist={props.hist} component={ Home } />
      <Route path='/accessDenied' hist={props.hist} component={ Home } />
      <AdminRoute path='/addStory' hist={props.hist} component={ AddStory }/>
      <AdminRoute path='/adminMenu' hist={props.hist} component={ AdminMenu }/>
      <AdminRoute path='/editArticles' hist={props.hist} component={ EditArticles }/>
      <Route path='/jwt/:token' hist={props.hist} component={ jwt } />
      <Route path='/adminJwt/:token' hist={props.hist} component={ adminJwt } />
      <Route path='/articles/:slug' hist={props.hist} component={ ArticleRender } />
      <Route path='/about' hist={props.hist} component={ AboutUs } />
      <Footer hist={props.hist}/>
    </div>
  )
}

export default Routes;