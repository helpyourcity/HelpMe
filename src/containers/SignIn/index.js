import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from "react-router";
import * as actions from "../../actions/Users"; // returns all of the actions

import { signInUser } from '../../actions/Users.js';

class SignIn extends Component {
  constructor(props) {
    super(props);
    console.log("PROPSSSSS", props);
    // initial state
    this.state = {
      email: '',
      password: '',
      redirectUser: false
    };

    console.log("USER", this.props.users);

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
    e.preventDefault();

    var signIn = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.signInUser(signIn);
  }

  render() {
    if(this.state.redirectUser ) {
      return (
        <Redirect to="/"></Redirect>
      );
    } else {
      return (
        <div>
          <label>Email:</label>
          <input
            name="email"
            onChange={this.handleEmailChange}
          />
          <br />
          <label>Password:</label>
          <input
            name="password"
            onChange={this.handlePasswordChange}
          />
          <br />
          <button onClick={this.handleSignIn}>Submit</button>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signInUser: (user) => {
      dispatch(signInUser(user));
    }
  }
};

const ConnectedSignIn = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

export default ConnectedSignIn;

