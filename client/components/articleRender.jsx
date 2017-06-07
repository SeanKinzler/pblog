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

  getDate() {
    let date = this.props.toRender.creationDate.split('T')[0].split('-');
    return `${date[1]}-${date[2]}-${date[0]}`
  }

  render() {
    if (store.getState().posts.fetching || this.props.toRender === null) {
      return (<div>Loading...</div>)
    } else if (this.props.toRender === undefined) {
      return (<Redirect to='/' />)
    } else {
      return (
        <div>
          <div className="article-container container-fluid row">
            <div id="article-left-col" className="col-sm-9">
              <h2 className="article-title">{this.props.toRender.title}</h2>
              <div className="article-picture-container">
              {
                this.props.toRender.bannerPath !== null && 
                <img id="article-photo" src={`${this.props.toRender.bannerPath}`}/>
              }
              {
                this.props.toRender.bannerRights !== null && 
                <div className="article-photo-caption text-center">
                  <p className="">{this.props.toRender.bannerRights}</p>
                  <hr />
                </div>
              }
              </div>
              <p className="article-author">By: {this.props.toRender.author}</p> 
              <p className="article-date">
                {
                  this.getDate()
                }
              </p>
              <br />
              <div id="Article" dangerouslySetInnerHTML={{__html: this.props.toRender.html}}></div>
            </div>
            <div className="col-sm-3">
              <p></p>
            </div>
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
