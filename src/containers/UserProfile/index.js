import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./toggle.css";

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      status: ""
    };

    this.handleEditButton = this.handleEditButton.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleStatusButton = this.handleStatusButton.bind(this);
  }

  componentWillMount() {
    var token = localStorage.getItem("token");
    axios
      .get("/api/user/getuser", {
        headers: {
          authorization: token
        }
      })
      .then(user => {
        this.setState({
          first_name: user.data.first_name,
          last_name: user.data.last_name,
          email: user.data.email,
          phone: user.data.phone,
          status: user.data.status
        });
      })
      .catch(err => {
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

  handleStatusButton(e) {
    e.preventDefault();
    let token = localStorage.getItem("token");
    if (this.state.status === "helper") {
      let updatedStatus = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        phone: this.state.phone,
        status: "user"
      };
      axios.put("/api/user/users/edit", updatedStatus, {
        headers: {
          authorization: token
        }
      });
      this.setState({
        status: this.state.status.replace("helper", "user")
      });
    } else if (this.state.status === "user") {
      let updatedStatus = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        phone: this.state.phone,
        status: "helper"
      };
      axios.put("/api/user/users/edit", updatedStatus, {
        headers: {
          authorization: token
        }
      });
      this.setState({
        status: this.state.status.replace("user", "helper")
      });
    } else {
      let updatedStatus = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        phone: this.state.phone,
        status: "user"
      };
      axios.put("/api/user/users/edit", updatedStatus, {
        headers: {
          authorization: token
        }
      });
      // this.setState({
      //   status: this.state.status.replace("user", "helper")
      // });
    }
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
    console.log("status: ", this.state.status);
    if (this.state.editMode) {
      return (
        <div>
          <h1>EDIT PROFILE</h1>
          <p>firstname: {this.state.first_name}</p>
          <p>lastname: {this.state.last_name}</p>
          <p>email:</p>
          <input type="text" onChange={this.handleEmailChange} />
          <p>phone:</p>
          <input type="text" onChange={this.handlePhoneChange} />
          <button onClick={this.handleSubmitButton}>Submit</button>
          <br />
          <h3>Status</h3>
          <label>
            Helper
            <input
              id="helper"
              type="radio"
              checked={this.state.status === "helper"}
              onChange={this.handleStatusButton}
            />
          </label>
          <label>
            User
            <input
              id="user"
              type="radio"
              checked={this.state.status === "user"}
              onChange={this.handleStatusButton}
            />
          </label>
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
