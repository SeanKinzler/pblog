import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Actions from '../actions/index.js';
import { connect } from 'react-redux';

class AdminMenu extends Component {
  constructor (props) {
    super(props);
    this.props = props;
    this.props.getAuthors();
  }

  logoutHandler(e) {
    this.props.userSignOut();
    this.props.history.push('/');
  }

  render () {
    return (
      <div>
        <ul>
          <li><Link to="/addStory">Add an article</Link></li>
          <li><Link to="/editArticles">Edit an article</Link></li>
          <li><a onClick={this.logoutHandler.bind(this)}>Logout!</a></li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, Actions)(AdminMenu);