import React, { Component } from 'React';

export default class extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.loginHandler = this.loginHandler.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.updatePass = this.updatePass.bind(this);
  }


  loginHandler (e) {
    e.preventDefault();
    console.log(this.state.username, this.state.password);
  }

  updateUser (e) {
    this.state.username = e.target.value;
    this.setState(this.state);
  }

  updatePass (e) {
    this.state.password = e.target.value;
    this.setState(this.state);
  }

  render () {
    return(
      <form>
        <input placeholder="Username" type="text" onChange={this.updateUser}></input>
        <input placeholder="password" type="password" onChange={this.updatePass}></input>
        <br />
        <input type="submit" onClick={this.loginHandler}></input>
      </form>
    )
  }
}