import React, { Component } from "react";
import axios from "axios";
class HelpMe extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      title: "",
      phoneNumber: "",
      address: ""
    };

    // functions
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.checkInputs = this.checkInputs.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  handlePhoneNumberChange(e) {
    this.setState({
      phoneNumber: e.target.value
    });
  }

  checkInputs() {
    var phoneNumberValidation = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (this.state.title === "") {
      return "ERROR: The title cannot be empty!";
    } else if (!this.state.phoneNumber.match(phoneNumberValidation)) {
      return "ERROR: That is not a valid phone number";
    }
    return true;
  }

  handleSubmitButton(e) {
    e.preventDefault();
    var checkInputsOutput = this.checkInputs();
    console.log("CHECKSINPUTOUTPUT", checkInputsOutput);
    if (checkInputsOutput === true) {
      // could cause error but:
      return navigator.geolocation.getCurrentPosition(position => {
        var token = localStorage.getItem("token");
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        console.log("lat/lng", lat + " " + lng);
        let coordinates = {
          lat: lat,
          lng: lng
        };

        axios.put("/api/user/map", coordinates, {
          headers: {
            authorization: token
          }
        });
      });
    } else {
      // alert w/ message from checkInputsOutput
    }
  }

  render() {
    return (
      <div>
        <h1>Create a help request</h1>
        <p>Enter a title for your request:</p>
        <input type="text" onChange={this.handleTitleChange} />
        <p>Phone Number:</p>
        <input type="text" onChange={this.handlePhoneNumberChange} />
        <br />
        <button onClick={this.handleSubmitButton}>Submit</button>
      </div>
    );
  }
}

export default HelpMe;
