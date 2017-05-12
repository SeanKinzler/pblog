import react, { Component } from 'react';

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
      <form action="/auth/openid" method="post">
        <div>
        <label>OpenID:</label>
        <input type="text" name="openid_identifier"/><br/>
        </div>
        <div>
        <input type="submit" value="Submit"/>
        </div>
      </form>
    )
  }
}