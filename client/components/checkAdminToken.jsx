import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from '../actions/index.js';
import { PrivateRoute, checkAuth, checkAdminAuth } from '../utils/auth.jsx';

class CheckAdminToken extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      checking: true,
    };
    checkAdminAuth(bool => {
      if (bool) {
        this.props.adminSignIn(localStorage.token);
      }
      if (this.state.checking) {
        let temp = {...this.state}
        temp.checking = false;
        this.setState(temp);
      }
    });
  }

  render () {
    if (this.props.admin && this.props.authenticated) {
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
    authenticated: state.auth.authenticated,
    admin: state.auth.admin
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, Actions)(CheckAdminToken);