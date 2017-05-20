import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar.jsx';
import * as Actions from '../actions/index.js';
import { connect } from 'react-redux';

class Home extends Component {
  constructor (props) {
    super(props);
    this.props = props;
    this.props.getPosts();
  }

  postClickHandler(e) {

  }

  render() {
    if (this.props.fetching) {
      return (<div>
          <Navbar />
          <p>Loading...</p>
        </div>)
    }
    return (
      <div>
        <Navbar />
        <br />
        {(this.props.match.params.accessDenied !== undefined) &&
          <h3>ACCESS DENIED</h3>
        }
        <ul>
          {this.props.posts.map((post, i) => {
            return (<li key={post.id} data-index={i} 
              onClick={this.postClickHandler}>
              {post.title}<br/>
              {post.author}
              </li>)
          })}
        </ul>  

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
