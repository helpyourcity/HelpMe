import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserProfile } from '../lib/users.js';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: ''
    };
  }

  componentWillMount() {
    console.log("USERPROFILE TOKEN", localStorage.getItem("token"));
    getUserProfile(localStorage.getItem("token"))
      .then((user) => {
        // this.setState({
        //   first_name: user.first_name,
        //   last_name: user.last_name,
        //   email: user.email,
        //   phone: user.phone
        // });
      });
  }

  render() {
    return(
      <div>
        <p>first name: {this.state.first_name}</p>
        <p>last name: {this.state.last_name}</p>
        <p>email: {this.state.email}</p>
        <p>phone: {this.state.phone}</p>
      </div>
    );
  }
}

export default UserProfile;