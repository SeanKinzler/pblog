import React, { Component } from 'react';
export default class jwt extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    localStorage.token = window.location.pathname.slice(window.location.pathname.lastIndexOf('/') + 1);
    console.log('logged in');
    this.props.history.push('/');    
    // logged in state
  }


  render() {
    return (
      <div className=''>
        <h4 className='center-align'>Redirecting...</h4>
      </div>
    );
  }
}