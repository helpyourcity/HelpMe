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

  componentWillMount() {
    if (localStorage.getItem("token") !== null) {
      this.setState({
        username: localStorage.getItem("username"),
        userAuthenticated: true
      });
    }
  }

  handleSignOut(e) {
    e.preventDefault();

    signOutUser();
  }

  render() {
    if (this.state.userAuthenticated) {
      return (
        <div>
          <div className="header">
            <div className="header-title align-row">
              <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x logo" />
                <i class="fa fa-medkit fa-stack-1x fa-inverse" />
              </span>
              <h2>Help Me!</h2>
              <p>a social rescue service.</p>
            </div>
            <div className="header-nav align-row">
              <div className="hello-user">Hello, {this.state.username}</div>
              <div className="hello-user"> | </div>
              <button className="logout-btn" onClick={this.handleSignOut}>
                Logout
              </button>
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
              <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x logo" />
                <i class="fa fa-medkit fa-stack-1x fa-inverse" />
              </span>
              <h2>Help Me!</h2>
              <p>a social rescue service.</p>
            </div>
            <div className="header-nav align-row">
              <div className="hello-user">
                <Link to="/user/signin">Sign-In</Link>
              </div>
              <div className="hello-user"> | </div>
              <div className="hello-user">
                <Link to="/user/new">Sign-Up</Link>
              </div>
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
