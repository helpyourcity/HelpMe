import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/Users.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Signout extends Component {
  componentWillMount() {
    console.log("checking");
    this.props.signoutUser();
  }
  render() {
    console.log("checking");
    return (
      <div>
        <h1>You are now logged out!</h1>
        <Link to="/"> Home </Link>
      </div>
    );
  }
}

export default connect(null, actions)(Signout);
