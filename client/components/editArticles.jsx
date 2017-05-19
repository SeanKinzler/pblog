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
    this.props.setPostToEdit(store.getState().posts.posts[e.target.dataset.index]);
    this.props.history.push('/addStory');
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
            return <li key={post.id} data-index={i} onClick={this.editPostHandler.bind(this)}>
                {post.title}<br/>
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
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, Actions)(EditArticles);
