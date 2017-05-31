import React, { Component } from 'react';

const CoverPhoto = (props) => {
  if (props.post.bannerPath) {
    return (
      <div>
        <img id="cover-photo" src="/src/coverPhoto.jpg" alt=""/>
        <h2 id="cover-photo-title">{props.post.title}</h2>
      </div>
    )
  } else {
    return(
      <img className="coverPhoto" src="/src/coverPhoto.jpg" />
    )
  }
}

export default CoverPhoto;