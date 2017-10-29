import React, { Component } from "react";
// import logo from './logo.svg';
import { connect } from "react-redux";

// COMPONENTS
import ReactRouter from "../../components/ReactRouter.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <ReactRouter />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const ConnectedApp = connect(
  mapStateToProps,
  null
)(App);

export default ConnectedApp;
