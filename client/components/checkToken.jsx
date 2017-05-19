import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from '../actions/index.js';
import { PrivateRoute, checkAuth } from '../utils/auth.jsx';

class CheckToken extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      checking: true,
    };
    checkAuth(bool => {
      if (bool) {
        this.props.userSignIn(localStorage.token);
      }
      if (this.state.checking) {
        let temp = {...this.state}
        temp.checking = false;
        this.setState(temp);
      }
    });
  }

  render () {
    if (this.props.authenticated) {
      return (
          <Redirect to={`${this.props.location.pathname}`} />
        )
    } else if (!this.state.checking) {
      return (<Redirect to="/" />)
    } else {
      return <div>redirecting...</div>
    }
  }


}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, Actions)(CheckToken);