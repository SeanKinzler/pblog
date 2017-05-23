import React, {Component} from 'react';
import axios from 'axios';
import * as Actions from '../actions/index.js';
import { connect } from 'react-redux';
import store from '../store/createStore.js';

class EditArticles extends Component {
  constructor (props) {
    super(props);
    this.props = props;
    this.props.getPosts();
  }

  editPostHandler (e) {
    console.log(e.target.dataset.index);
    this.props.setPostToEdit(this.props.posts[e.target.dataset.index]);
    this.props.history.push('/addStory');
  }

  deletePostHandler (e) {
    this.props.deletePost(this.props.posts[e.target.dataset.index]); 
  }

  render () {
    if (store.getState().posts.fetching) {
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <ul>
          {store.getState().posts.posts.map((post, i) => {
            return <li key={post.id} >
                {post.title}<button data-index={i} onClick={this.editPostHandler.bind(this)}>Edit</button>
                <button data-index={i} onClick={this.deletePostHandler.bind(this)}>Delete</button>
                <br/>
                {post.author}
              </li>
          })}
        </ul>
      )
    }
  }
}



const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, Actions)(EditArticles);
