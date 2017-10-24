import React, { Component } from "react";
import "./Header.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class LoginHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //Create account href is used for testing, to be deleted
    return (
      <div className="header">
        <div className="header-title">Help Me!</div>
        <div className="header-nav">
          <Link to="/"> Home </Link> /
          <Link to="/"> Logout</Link>
        </div>
      </div>
    );
  }
}

export default LoginHeader;