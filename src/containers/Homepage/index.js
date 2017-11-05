import React, { Component } from "react";

import Footer from "../Footer";
import Header from "../Header";
import ConnectedMap from "../Map";
import { signOutUser } from "../lib/users.js";

//css
import "./Homepage.css";
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
          <div className="name">Hello, {this.state.username}</div>
          <br />
          <button className="name" onClick={this.handleSignOut}>
            Logout
          </button>
          <Header userAuthenticated={this.state.userAuthenticated} />
          <ConnectedMap />
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Header
            username={this.state.username}
            userAuthenticated={this.state.userAuthenticated}
          />
          <ConnectedMap />
        </div>
      );
    }
  }
}

export default Homepage;
