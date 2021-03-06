import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';

class adminJwt extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    console.log(this.props);
  }

  componentDidMount() {
    let temp = window.location.pathname.slice(window.location.pathname.lastIndexOf('/') + 1);
    console.log(temp);
    [localStorage.token, temp] = temp.split('%25%25');
    localStorage.name = temp.split('%20').join(' ');
    this.props.adminSignIn(localStorage.token);
    this.props.history.push('/adminMenu');
  }


  render() {
    return (
      <div className=''>
        <h4 className='center-align'>Redirecting...</h4>
      </div>
    );
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

export default connect(mapStateToProps, Actions)(adminJwt);
