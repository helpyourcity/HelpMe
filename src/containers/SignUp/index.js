import React, { Component } from "react";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";
import PasswordMask from "react-password-mask";
import { Redirect } from "react-router";
import Link from "valuelink";

import { createNewUser } from "../lib/users.js";

function validateName(name) {
  if (parseInt(name) == name) {
    return window.alert("valid"); // error out if there is a number insert
  } else {
    return this.setState({
      validateFirst_name: true
    });
  }
}

class SignUp extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      redirectAddress: false,
      validFirst_name: false,
      status: ["user"]
    };

    // functions
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleSubmitUser = this.handleSubmitUser.bind(this);
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleFirstName(e) {
    this.setState({
      first_name: e.target.value
    });
  }

  handleLastName(e) {
    this.setState({
      last_name: e.target.value
    });
  }

  handlePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  handleSubmitUser(evt) {
    //maybe take away submit function?
    evt.preventDefault();
    let strOnly = /^[a-zA-Z()]+$/;
    let newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      active: true,
      status: "user"
    };

    createNewUser(newUser).then(() => {
      this.setState({
        redirectAddress: true
      });
    });
  }

  render() {
    if (this.state.redirectAddress) {
      return <Redirect to="/" />;
    } else {
      const nameLink = Link.state(this, "first_name").check(
        x => x,
        "First Name is required"
      );
      const emailLink = Link.state(this, "email").check(
        x => x,
        "Email is required"
      );
      return (
        <div>
          <h1>Sign Up</h1>
          <h3>Email</h3>
          <input
            type="text"
            placeholder="youremail@gmail.com"
            onChange={this.handleEmail}
          />
          <h3>Password</h3>
          <PasswordMask
            placeholder="Enter Password"
            value={this.state.password}
            onChange={this.handlePassword}
            useVendorStyles={false}
          />
          <h3>First Name</h3>
          <input
            type="text"
            placeholder="John"
            onChange={this.handleFirstName}
          />
          <h3>Last Name</h3>
          <input type="text" placeholder="Doe" onChange={this.handleLastName} />

          <h3>Phone Number</h3>
          <NumberFormat
            format="##########"
            placeholder="808-123-4567"
            onChange={this.handlePhone}
          />
          <br />
          <br />
          <button
            disabled={nameLink.error || emailLink.error}
            onClick={this.handleSubmitUser}
          >
            Create Account
          </button>
        </div>
      );
    }
  }
}

export default SignUp;
