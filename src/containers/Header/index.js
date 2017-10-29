import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

// ACTION
import { signOutUser } from '../lib/users.js';

// CSS
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userAuthenticated: this.props.userAuthenticated
    };

    // functions
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  // componentWillMount() {
  //   // console.log("CWM", this.props.user[0].firstName);
  //   // check if token exists, save username in state
  //   if(localStorage.getItem("token") !== null) {
  //     // update user
  //     this.setState({
  //       username: this.props.user.firstName
  //     });
  //   }
  // }

  handleSignOut(e) {
    e.preventDefault();

    signOutUser();

    this.setState({
      userAuthenticated: false
    });
  }

  render() {
    if(this.state.userAuthenticated) {
      return (
        <div className="header">
          <div className="header-title">Help Me!</div>
          <div className="header-nav">
            <div>Hello, {this.props.username}</div>
            <button onClick={this.handleSignOut}>Logout</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="header">
          <div className="header-title">Help Me!</div>
          <div className="header-nav">
            <div><Link to="/user/signin">Sign-In</Link></div>
            <div><Link to="/user/new">Sign-Up</Link></div>
          </div>
        </div>
      );
    }
  }
}

export default Header;
