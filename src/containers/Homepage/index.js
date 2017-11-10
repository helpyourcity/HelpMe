import React, { Component } from "react";

import Footer from "../Footer";
import Header from "../Header";
import ConnectedMap from "../Map";
import { signOutUser } from "../lib/users.js";
import { Link } from "react-router-dom";

//css
import "./Header.css";
class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      userAuthenticated: this.props.userAuthenticated
    };

    //function
    this.handleSignOut = this.handleSignOut.bind(this);
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

    this.setState({
      userAuthenticated: false
    });
  }

  render() {
    if (this.state.userAuthenticated) {
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
              <div className="hello-user">Hello, {this.state.username}</div>
              <div className="hello-user"> | </div>
              <button className="logout-btn" onClick={this.handleSignOut}>Logout</button>
            </div>
          </div>
          <div className="dark-red" />
          <div className="darker-red" />
          <ConnectedMap />
          <Footer />
        </div>
      );
    } else {
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
              <div className="hello-user"><Link to="/user/signin">Sign-In</Link></div>
              <div className="hello-user"> | </div>
              <div className="hello-user"><Link to="/user/new">Sign-Up</Link></div>
            </div>
          </div>
          <div className="dark-red" />
          <div className="darker-red" />
          <ConnectedMap />
        </div>
      );
    }
  }
}

export default Homepage;
