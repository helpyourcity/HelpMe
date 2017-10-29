import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false
    };

    this.handleEditButton = this.handleEditButton.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  componentWillMount() {
    console.log("TOKOKOKONEEN", localStorage.getItem("token"));
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

  componentDidMount() {
    console.log(this.props.user);
  }

  handleEditButton(e) {
    this.setState({
      editMode: true
    });
  }

  handleSubmitButton(e) {
    this.setState({
      editMode: false
    });
  }

  render() {
    if(this.state.editMode) {
      return (
        <div>
          <h1>EDIT PROFILE</h1>
          <button onClick={this.handleSubmitButton}>Submit</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>PROFILE</h1>
          <p>{this.state.first_name}</p>
          <p>{this.state.last_name}</p>
          <p>{this.state.email}</p>
          <p>{this.state.phone}</p>
          <button onClick={this.handleEditButton}>Edit</button>
        </div>
      );
    }
  }
}

export default UserProfile;