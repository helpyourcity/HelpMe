import React, { Component } from "react";
import { Redirect } from "react-router";

import { signInUser } from '../lib/users.js';

// CSS
import './SignIn.css';

class SignIn extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      email: '',
      password: '',
      redirectUser: false
    };

    // functions
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleSignIn(e) {
    var user = {
      email: this.state.email,
      password: this.state.password
    };

    signInUser(user)
      .then(() => {
        this.setState({
          redirectUser: true
        });
      });
  }

  render() {
    if(localStorage.getItem("token") !== null) {
      return (
        <Redirect to="/"></Redirect>
      );
    } else {
      return (
        <div className="background align">
          <div className="back-btn">
            <p>back</p>
          </div>
          <div className="main-cont align">

            <div className="title-cont">
              <h1>SIGN-IN</h1>
            </div>

            <div className="info-cont align">
              <div className="align align-left">
                <label for="email">Email:</label>
                <input
                  name="email"
                  type="text"
                  placeholder="Email Address"
                  onChange={this.handleEmailChange}
                />
              </div>
              <div className="align align-left">
                <label for="password">Password:</label>
                <input
                  name="password"
                  type="text"
                  placeholder="Password"
                  onChange={this.handlePasswordChange}
                />
              </div>
              <button onClick={this.handleSignIn}>SUBMIT</button>
            </div>

          </div>
          <div className="footer">
            <p>New to Help Me? <strong>Create an account.</strong></p>
          </div>

        </div>
      );
    }
  }
}

export default SignIn;

