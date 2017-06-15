import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './post.jsx';
import PostLeft from './postLeft.jsx';
import CoverPhoto from './coverPhoto.jsx';
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
    this.props.hist.push(`/articles/${post.slug}`);
    this.props.history.push(`/articles/${post.slug}`);
    window.scrollTo(0,0);
  }

  componentDidUpdate() {
  }

  render() {
    if (this.props.fetching || this.props.posts.length === 0) {
      return (<div>
        </div>)
    }
    let posts = this.props.posts.reverse();
    let leftPosts = posts.slice(1, 3);
    let rightPosts = posts.slice(3, 7);
    let bottomPosts = posts.slice(7);
    return (
      <div>
        <div className="p-type-0" onClick={this.postClickHandler.bind(this)}
        key={posts[0].id} data-index={0}>
          <CoverPhoto post={posts[0]}/>
        </div>
        <div className="posts container-fluid">
          <div className="col-sm-6 col-xs-12">
            {
              leftPosts.map((post, i) => {
                return (
                  <div className="post p-type-1 text-center" key={post.id} data-index={i + 1}
                    onClick={this.postClickHandler.bind(this)}>
                    <PostLeft post={post}/>
                  </div>
                  )
              })
            }
          </div>
          <div className="right-articles col-sm-6 col-xs-12">
            <ul className="post-list">
              {
                rightPosts.map((post, i) => {
                return (
                    <div className="post p-type-2" key={post.id} data-index={i + 3} 
                    onClick={this.postClickHandler.bind(this)}>
                    {
                      post.thumbPath !== "null" && 
                      <img className="thumb col-sm-3" src={`${post.thumbPath}`} />
                    }
                    {
                      post.bannerPath !== "null" && post.thumbPath === "null" &&
                      <img className="thumb col-sm-3" src={`${post.bannerPath}`} />
                    }
                    <Post className="col-sm-9" post={post} />
                    <hr className="col-sm-12"/>
                    <div className="clear-float"></div>
                    </div>
                  )
              })
            }
            </ul>  
          </div>
          <div className="bottom-articles col-sm-12">
            <ul className="post-list">
              {bottomPosts.map((post, i) => {
                return (
                  <li className="post p-type-3" key={post.id} data-index-num={i + 7} 
                    onClick={this.postClickHandler.bind(this)}>
                  {
                    post.thumbPath !==null && 
                    <img className="thumb" src={`${post.thumbPath}`} />
                  }
                  {
                    post.bannerPath !== "null" && post.thumbPath === "null" &&
                    <img className="thumb col-sm-3" src={`${post.bannerPath}`} />
                  }
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
