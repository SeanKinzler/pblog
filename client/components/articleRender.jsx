import React, { Component } from 'react';  
import * as Actions from '../actions/index.js';
import { connect } from 'react-redux';
import store from '../store/createStore.js';
import { Redirect } from 'react-router-dom';

class ArticleRender extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    if (this.props.posts.length === 0) {
      let slug = this.props.match.params.slug;
      this.props.getPosts(()=>{
        this.props.setPostToRender(this.props.slugInd[slug]);
      });
    } else {
      this.props.setPostToRender(this.props.slugInd[this.props.match.params.slug])
    }
  }

  render() {
    if (store.getState().posts.fetching || this.props.toRender === null) {
      return (<div>Loading...</div>)
    } else if (this.props.toRender === undefined) {
      return (<Redirect to='/' />)
    } else {
      return (
        <div>
          {
            this.props.toRender.bannerPath !== null && 
            <img id="cover-photo" src={`${this.props.toRender.bannerPath}`}/>
          }
          {
            this.props.toRender.bannerRights !== null && 
            <div className="cover-photo-caption text-center">
              <p className="">{this.props.toRender.bannerRights}</p>
              <hr />
            </div>
          }
          <div className="container-fluid">
            <h2>{this.props.toRender.title}</h2>
            <h4>Updated by: {this.props.toRender.author}</h4> 
            <div id="Article" dangerouslySetInnerHTML={{__html: this.props.toRender.html}}></div>
          </div>
        </div>
    )}
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    toRender: state.posts.toRender,
    fetching: state.posts.fetching,
    slugInd: state.posts.slugInd,
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, Actions)(ArticleRender);
