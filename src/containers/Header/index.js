import React, { Component } from "react";
import "./Header.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/Users.js";

class Header extends Component {
  renderLinks() {
    console.log("this", this.props.authenticated.authenticated);
    if (this.props.authenticated.authenticated == true) {
      return <Link to="/signout"> Logout</Link>;
    } else {
      return [
        <div key={1}>
          <Link to="/user/login"> Login </Link> /
          <Link to="/create/account"> Create Account </Link>
        </div>
      ];
    }
  }

  render() {
    //Create account href is used for testing, to be deleted
    return (
      <div className="header">
        <div className="header-title">Help Me!</div>
        <div className="header-nav">
          <Link to="/"> Home </Link>
          <ul>{this.renderLinks()}</ul>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("this state", state.users);
  return {
    authenticated: state.users
  };
}

const ChangingHeader = connect(mapStateToProps, actions)(Header);

export default ChangingHeader;
