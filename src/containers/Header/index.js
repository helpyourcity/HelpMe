import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
        <div>
          <div className="header">
            <div className="header-title align-row">
              <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x logo"></i>
                <i class="fa fa-medkit fa-stack-1x fa-inverse"></i>
              </span>
              <h2>Help Me!</h2>
              <p>a social rescue service.</p>
            </div>
            <div className="header-nav align-row">
              <div className="hello-user">Hello, {this.props.username}</div>
              <div className="hello-user"> | </div>
              <button className="logout-btn" onClick={this.handleSignOut}>Logout</button>
            </div>
          </div>
          <div className="dark-red" />
          <div className="darker-red" />
        </div>
      );
    } else {
      return (
        <div>
          <div className="header">
            <div className="header-title align-row">
              <h2>Help Me!</h2>
              <p>a social rescue service.</p>
            </div>
            <div className="header-nav align-row">
              <div className="hello-user"><Link to="/user/signin">Sign-In</Link></div>
              <div className="hello-user"> | </div>
              <div className="hello-user"><Link to="/user/new">Sign-Up</Link></div>
            </div>
          </div>
          <div className="dark-red" />
          <div className="darker-red" />
        </div>
      );
    }
  }
}

export default Header;
