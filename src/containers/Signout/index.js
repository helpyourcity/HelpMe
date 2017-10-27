import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/Users.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SignOut extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.signOutUser();
  }

  render() {
    return (
      <div>
        <h1>You are now logged out!</h1>
        <Link to="/"> Home </Link>
      </div>
    );
  }
}

export default connect(null, actions)(SignOut);

