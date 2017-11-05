import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/";

// ACTION
import { signOutUser } from "../lib/users.js";

// CSS
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userAuthenticated: this.props.userAuthenticated
    };
  }

  render() {
    if (this.state.userAuthenticated) {
      return (
        <div id="container">
          <div className="header">
            <div className="header-title">Help Me!</div>
            <div className="header-nav" />
          </div>
          <div className="footer">{/* <Footer /> */}</div>
        </div>
      );
    } else {
      return (
        <div className="header">
          <div className="header-title">Help Me!</div>
          <div className="header-nav">
            <div>
              <Link to="/user/signin">Sign-In</Link>
            </div>
            <div>
              <Link to="/user/new">Sign-Up</Link>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Header;
