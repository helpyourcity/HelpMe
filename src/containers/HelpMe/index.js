import React, { Component } from "react";
import axios from "axios";

// CSS
import './HelpMe.css';

class HelpMe extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      title: "",
      phoneNumber: "",
      errors: {
        title: "",
        phoneNumber: ""
      },
      titleValid: false,
      phoneNumberValid: false,
      formValid: false
    };

    // functions
    this.handleError = this.handleError.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateField = this.validateField.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    this.setState(
      {
        [target.name]: target.value
      },
      () => {
        this.validateField(target.name, target.value);
      }
    );
  }

  validateField(fieldName, value) {
    let errors = this.state.errors;
    let titleValid = this.state.titleValid;
    let phoneNumberValid = this.state.phoneNumberValid;

    switch (fieldName) {
      case "title":
        titleValid = value.length >= 5;
        errors.title = titleValid
          ? ""
          : "Title must be longer than five characters.";
        break;
      case "phoneNumber":
        phoneNumberValid = value.match(
          /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        );
        errors.phoneNumber = phoneNumberValid
          ? ""
          : "Phone number must be a valid number.";
        break;
      default:
        break;
    }

    this.setState(
      {
        errors,
        titleValid,
        phoneNumberValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.titleValid && this.state.phoneNumberValid
    });
  }

  handleError(error) {
    return error.length === 0 ? "" : "has-error";
  }

  handleSubmitButton(e) {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(position => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;

      var token = localStorage.getItem("token");
      let coordinates = {
        lat: lat,
        lng: lng,
        status: "helpee"
      };
      axios
        .put("/api/user/map", coordinates, {
          headers: {
            authorization: token
          }
        })
        .then(location => {
          console.log("LOWCATS", location);
          var token = localStorage.getItem("token");

          let rescueRequest = {
            lat: location.data.lat,
            lng: location.data.lng,
           phoneNumber:this.state.phoneNumber,
            title: this.state.title
          };
          console.log("POSITION", this.state);
          axios.post("/api/rescue/sms/rescue", rescueRequest, {
            headers: {
              authorization: token
            }
          });
        });
    });
    console.log("GOOD");

  }

  render() {
    return (
      <form onSubmit={this.handleSubmitButton}>
        <div className="modal-cont align">
          <h1>Create a Help Me Request!</h1>
            <div className="align-left align">
              <label for="title">Title:</label>
              <input
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
              <span>{this.state.errors.title || ""}</span>
            </div>
            <div className="align-left align">
              <label for="phoneNumber">Phone number:</label>
              <input
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
              />
              <span>{this.state.errors.phoneNumber || ""}</span>
            </div>
            <input id="modal-btn" name="submit" type="submit" disabled={!this.state.formValid} />
        </div>
      </form>
    );
  }
}

export default HelpMe;
