import React, { Component } from 'react';
import Post from './post.jsx';

const PostLeft = (props) => {
  return (
    <div>
      {props.post.bannerPath !== null &&
        <div>
          <img className="row" src={`${props.post.bannerPath}`} />
          <p className="caption">{props.post.bannerRights}</p>
        </div>
      }
      <Post post={props.post} />
      <hr />
    </div>
  )
}

export default PostLeft