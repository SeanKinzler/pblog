import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar.jsx';


const Post = (props) => {
  return (
    <div>
      <h2 className="post-title">{props.post.title}</h2>
      <div className="by">By {props.post.author}</div>
    </div>
  )}

export default Post;