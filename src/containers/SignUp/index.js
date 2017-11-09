import React, { Component } from "react";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";
import PasswordMask from "react-password-mask";
import { Redirect } from "react-router";
import { Link as redirectLink } from "react-router-dom";
import Link from "valuelink";
import { createNewUser } from "../lib/users.js";

// CSS
import './SignUp.css';

function validateName(name) {
  if (parseInt(name) === name) {
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

        <div className="background align">
          <redirectLink to="/"><i className="fa fa-angle-left fa-3x back-btn" aria-hidden="true"></i></redirectLink>
          <div className="main-cont-su align">
            <div className="title-cont">
              <h1>JOIN <strong>HELP ME.</strong></h1>
            </div>
            <div className="info-cont align">
              <div className="align align-left">
                <label for="email">Email:</label>
                <input
                  type="text"
                  name="email"
                  placeholder="youremail@gmail.com"
                  onChange={this.handleEmail}
                />
              </div>
              <div className="align align-left">
                <label for="firstName">First name:</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  onChange={this.handleFirstName}
                />
              </div>
              <div className="align align-left">
                <label for="lastName">Last name:</label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  onChange={this.handleLastName}
                />
              </div>
              <div className="align align-left">
                <label for="phoneNumber">Phone number:</label>
                <input
                  name="phoneNumber"
                  type="text"
                  placeholder="808-123-4567"
                  onChange={this.handlePhone}
                />
              </div>
              <div className="align align-left">
                <label for="password">Password:</label>
                <PasswordMask
                  name="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.handlePassword}
                  useVendorStyles={false}
                />
              </div>
              <button
                className="btn"
                disabled={nameLink.error || emailLink.error}
                onClick={this.handleSubmitUser}
              >Create an account</button>
            </div>
          </div>
          <div className="footer">
            Already have an account? <strong><redirectLink to="/user/signin">Sign in here.</redirectLink></strong>
          </div>

        </div>
      );
    }
  }
}

export default SignUp;
