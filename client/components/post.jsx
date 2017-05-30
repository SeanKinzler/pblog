import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Post = (props) => {
  return (
    <div>
      <h2 className="post-title">{props.post.title}</h2>
      <p className="by">By {props.post.author}</p>
      <p className="post-blurb">{props.post.blurb}</p>
    </div>
  )}

export default Post;