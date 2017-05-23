import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar.jsx';
import Post from './post.jsx';

import * as Actions from '../actions/index.js';
import { connect } from 'react-redux';

class Home extends Component {
  constructor (props) {
    super(props);
    this.props = props;
    this.props.getPosts();
  }

  postClickHandler(e) {
    let target = e.target;
    //finds dataset if child is clicked
    while (target.dataset.index === undefined) {
      target = target.parentNode;
    }
    let post = this.props.posts[target.dataset.index];
    this.props.setPostToRender(post);
    this.props.history.push(`/articles/${post.slug}`);
  }

  render() {
    if (this.props.fetching || this.props.posts.length === 0) {
      return (<div>
          <Navbar />
          <p>Loading...</p>
        </div>)
    }
    let posts = this.props.posts.reverse();
    console.log(posts);
    // let mainPost = posts.slice(0, 1);
    let rightPosts = posts.slice(1, 7);
    let bottomPosts = posts.slice(7);
    return (
      <div>
        <Navbar />
        <br />
        {(this.props.match.params.accessDenied !== undefined) &&
          <h3>ACCESS DENIED</h3>
        }
        <div className="posts container-fluid">
          <div className="post p-type-1 text-center col-sm-8" key={posts[0].id} data-index={0}
            onClick={this.postClickHandler.bind(this)}>
            <Post post={posts[0]}/>
            <hr />
          </div>
          <div className="right-articles col-sm-4">
            <ul className="post-list">
              {rightPosts.map((post, i) => {
                // console.log(i);
                // console.log(this.props.posts[posts.length - i - 1])
                return (<li className="post p-type-2" key={post.id} data-index={i + 1} 
                  onClick={this.postClickHandler.bind(this)}>
                  <Post post={post}/>
                  <hr />
                </li>)
              })}
            </ul>  
          </div>
          <div className="bottom-articles col-sm-12">
            <ul className="post-list">
              {bottomPosts.map((post, i) => {
                // console.log(i);
                // console.log(this.props.posts[posts.length - i - 1])
                return (<li className="post p-type-3" key={post.id} data-index-num={i + 1} 
                  onClick={this.postClickHandler.bind(this)}>
                  <Post post={post}/>
                  <hr />
                </li>)
              })}
            </ul>  
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.posts.fetching,
    posts: state.posts.posts,
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, Actions)(Home);
