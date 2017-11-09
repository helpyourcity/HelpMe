import React, { Component } from "react";
import PasswordMask from "react-password-mask";
import { Redirect } from "react-router";
import Link from "valuelink";
import NumberFormat from "react-number-format";
import { createNewUser } from "../lib/users.js";


// CSS
import "./SignUp.css";

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

  validateName(name) {
  if (parseInt(name) === name) {
    return window.alert("valid"); // error out if there is a number insert
  } else {
    return this.setState({
      validateFirst_name: true
    });
  }
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

  isEmpty(e) {
    if (!e.target.value || /^\s*$/.test(e.target.value)) {
      console.log("checking if empty:", "nope");
    } else {
      console.log("checking if empty: ", "alright");
    }
  }

  isInteger(e) {
    if (typeof e.target.value === "number" && e.target.value % 1 === 0) {
      console.log("checking if int: ", "nope");
    } else {
      console.log("checking if int: ", "alright");
    }
  }

  handleSubmitUser(evt) {
    //maybe take away submit function?
    evt.preventDefault();
    // let strOnly = /^[a-zA-Z()]+$/;
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
    } //else {
    //   const nameLink = Link.state(this, "first_name").check(
    //     x => x,
    //     "First Name is required"
    //   );
    //   const emailLink = Link.state(this, "email").check(
    //     x => x,
    //     "Email is required"
    //   );

    return (
      <div className="background align">
        <div className="main-cont-su align">
          <div className="title-cont">
            <h1>
              JOIN <strong>HELP ME.</strong>
            </h1>
          </div>
          <div className="info-cont align">
            <div className="align align-left">
              <label for="email">Email:</label>
              <input
                type="text"
                name="email"
                onBlur={this.isEmpty}
                onBlur={this.isInteger}
                placeholder="youremail@gmail.com"
                onChange={this.handleEmail}
              />
            </div>
            <div className="align align-left">
              <label for="firstName">First name:</label>
              <input
                type="text"
                name="firstName"
                onBlur={this.isEmpty}
                onBlur={this.isinteger}
                placeholder="John"
                onChange={this.handleFirstName}
              />
            </div>
            <div className="align align-left">
              <label for="lastName">Last name:</label>
              <input
                name="lastName"
                type="text"
                onBlur={this.isEmpty}
                onBlur={this.isInteger}
                placeholder="Doe"
                onChange={this.handleLastName}
              />
            </div>
            <div className="align align-left">
              <label for="phoneNumber">Phone number:</label>
              <NumberFormat
                name="phoneNumber"
                format="##########"
                onBlur={this.isEmpty}
                placeholder="8081234567"
                onChange={this.handlePhone}
              />
            </div>
            <div className="align align-left">
              <label for="password">Password:</label>
              <PasswordMask
                name="password"
                placeholder="Enter Password"
                value={this.state.password}
                onBlur={this.isEmpty}
                onChange={this.handlePassword}
                useVendorStyles={false}
              />
            </div>
            <button
              /* disabled={nameLink.error || emailLink.error} */
              onClick={this.handleSubmitUser}
            >
              Create an account
            </button>
          </div>
        </div>
        <div className="footer">
          <p>
            Already have an account? <strong>Sign in here.</strong>
          </p>
        </div>
      </div>
    );
    // }
  }
}

export default SignUp;
