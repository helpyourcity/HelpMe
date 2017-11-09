import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link as redirectLink } from "react-router-dom";
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

  isInteger(newState) {
    if (typeof newState === "number" || (newState % 1 === 0 && newState)) {
      return "inline";
    } else {
      console.log("checking if int: ", "alright");
    }
  }

  handleSubmitUser(evt) {
    //maybe take away submit function?
    let vaildEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    evt.preventDefault();

    let newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      active: true,
      status: "user"
    };

    if (vaildEmail.test(newUser.email)) {
      createNewUser(newUser).then(() => {
        this.setState({
          redirectAddress: true
        });
      });
    }
    console.log("enter vaild email");
  }

  render() {
    if (this.state.redirectAddress) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="background align">
          <redirectLink to="/">
            <i className="fa fa-angle-left fa-3x back-btn" aria-hidden="true" />
          </redirectLink>
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
                  placeholder="youremail@gmail.com"
                  onChange={this.handleEmail}
                  required
                />
              </div>

              <div className="align align-left">
                <label for="firstName">First name:</label>
                <div
                  id="firstname"
                  style={{
                    display: this.isInteger(this.state.first_name)
                  }}
                >
                  *please enter a vaild name*
                </div>
                <input
                  type="text"
                  name="firstName"
                  onBlur={this.isInteger}
                  placeholder="John"
                  onChange={this.handleFirstName}
                  required
                />
              </div>

              <div className="align align-left">
                <label for="lastName">Last name:</label>
                <div
                  id="lastname"
                  style={{
                    display: this.isInteger(this.state.last_name)
                  }}
                >
                  *please enter a vaild name*
                </div>
                <input
                  name="lastName"
                  type="text"
                  onBlur={this.isInteger}
                  placeholder="Doe"
                  onChange={this.handleLastName}
                  required
                />
              </div>

              <div className="align align-left">
                <label for="phoneNumber">Phone number:</label>
                <NumberFormat
                  name="phoneNumber"
                  format="##########"
                  placeholder="8081234567"
                  onChange={this.handlePhone}
                  required
                />
              </div>

              <div className="align align-left">
                <label for="password">Password:</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  onChange={this.handlePassword}
                  required
                />
              </div>
              <button
                disabled={
                  !this.state.first_name ||
                  !this.state.last_name ||
                  !this.state.email ||
                  !this.state.phone ||
                  !this.state.password
                }
                className="btn"
                onClick={this.handleSubmitUser}
              >
                Create an account
              </button>
            </div>
            <div className="footer">
              Already have an account?{" "}
              <strong>
                <redirectLink to="/user/signin">Sign in here.</redirectLink>
              </strong>
            </div>
          </div>
        </div>
      );
      // }
    }
  }
}

export default SignUp;
