import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TopHeader from '../../components/TopHeader.js';
// import * as actions from '../../actions/Users.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import { signOutUser } from '../../actions/Users.js';

// CSS
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      username: ''
    };

    // functions
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentWillMount() {
    // check if token exists, save username in state
    console.log("HEADER-CWM", this.props.user);
    if(localStorage.getItem("token") !== null) {
      this.setState({
        username: this.props.user.first_name
      });
    }
  }

  handleSignOut(e) {
    e.preventDefault();

    this.props.signOutUser();

    this.setState({
      username: ''
    });
  }

  render() {

    if(this.state.username !== '') {
      return (
        <div className="header">
          <div className="header-title">Help Me!</div>
          <div className="header-nav">
            <div>Hello, {this.state.username}</div>
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

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOutUser: () => {
      dispatch(signOutUser());
    }
  }
};

const ConnectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default ConnectedHeader;
