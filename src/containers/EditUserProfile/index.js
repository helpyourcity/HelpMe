// need to make changes on this file read comment below
import { connect } from "react-redux";
import React, { Component } from "react";
import Header from "../Header/UserLogin";
import { fetchUser } from "../../actions/Users.js";
import SignIn from "../../containers/SignIn";
import { Redirect } from "react-router";

class EditProfile extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let token = window.localStorage.token;
    //if logged in render page, if not direct to home
    if (token) {
      console.log("loggeds", token);
      console.log("token type: ", Storage);
    } else {
      window.alert("Please Login ");
      window.location.replace("/user/login");
    }
  }

  handleFirstName(e) {
    this.setState({
      first_name: e.target.value
    });
  }
  handleLastName(e) {
    this.setState({
      last_name: e.target.value
    });
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handlePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  editUser() {
    //check if logged in to editPage
    let token = window.localStorage.token;
    if (token != null) {
      console.log("clicked");
      let newProfile = {
        firsttName: "",
        lastName: "",
        Email: ""
      };
    }
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Edit Profile</h1>
        <h1>Welcome {first_name}</h1>
        <button onClick={this.editUser.bind(this)}>Edit Profile</button>
      </div>
    );
  }
}

export default EditProfile;
