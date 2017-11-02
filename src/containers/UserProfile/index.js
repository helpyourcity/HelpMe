import React, { Component } from 'react';
import axios from 'axios';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false
    };

    this.handleEditButton = this.handleEditButton.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  componentWillMount() {
    var token = localStorage.getItem("token");
    axios.get("/api/user/getuser", {
      headers: {
        authorization: token
      }
    }).then((user) => {
      this.setState({
        first_name: user.data.first_name,
        last_name: user.data.last_name,
        email: user.data.email,
        phone: user.data.phone
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handlePhoneChange(e) {
    this.setState({
      phone: e.target.value
    });
  }

  handleEditButton(e) {
    // Switch to edit view
    this.setState({
      editMode: true
    });
  }

  handleSubmitButton(e) {
    // Change users data and switch to users profile view
    var token = localStorage.getItem("token");

    var updatedInfo = {
      email: this.state.email,
      phone: this.state.phone
    };

    axios.put("/api/user/users/edit", updatedInfo, {
      headers: {
        authorization: token
      }
    });

    this.setState({
      editMode: false
    });
  }

  render() {
    if(this.state.editMode) {
      return (
        <div>
          <h1>EDIT PROFILE</h1>
          <p>firstname: {this.state.first_name}</p>
          <p>lastname: {this.state.last_name}</p>
          <p>email:</p>
          <input
            type="text"
            onChange={this.handleEmailChange}
          />
          <p>phone:</p>
          <input
            type="text"
            onChange={this.handlePhoneChange}
          />
          <button onClick={this.handleSubmitButton}>Submit</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>PROFILE</h1>
          <p>firstname: {this.state.first_name}</p>
          <p>lastname: {this.state.last_name}</p>
          <p>email: {this.state.email}</p>
          <p>phone: {this.state.phone}</p>
          <button onClick={this.handleEditButton}>Edit</button>
        </div>
      );
    }
  }
}

export default UserProfile;