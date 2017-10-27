// need to make changes on this file read comment below
import { connect } from "react-redux";
import React, { Component } from "react";
import { userLocation } from "../../actions/Users";
import user from "./index";
import NumberFormat from "react-number-format";
import ConnectedSignUp from "./index";
import Header from "../Header/index";

class UserLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      house_number: "",
      street: "",
      unit: "",
      apt_num: "",
      city: "",
      state: "",
      zip_code: "",
      geo_point: "",
      user_id: ""
    };
  }

  componentWillMount() {
    //used to test out front end. need this to run react
    console.log(this.state);
  }

  handleHouseNumber(e) {
    this.setState({
      house_number: parseInt(e.target.value)
    });
  }
  handleStreetAddress(e) {
    this.setState({
      street: e.target.value
    });
  }
  handleUnit(e) {
    this.setState({
      unit: e.target.value
    });
  }
  handleApt_Num(e) {
    this.setState({
      apt_num: parseInt(e.target.value)
    });
  }
  handleCity(e) {
    this.setState({
      city: e.target.value
    });
  }
  handleState(e) {
    this.setState({
      state: e.target.value
    });
  }
  handleZipcode(e) {
    this.setState({
      zip_code: parseInt(e.target.value)
    });
  }
  submitLocation(evt) {
    evt.preventDefault();
    let numOnly = Number.isInteger();

    let newLocation = {
      house_number: this.state.house_number,
      street: this.state.street,
      unit: this.state.unit,
      apt_num: this.state.apt_num,
      city: this.state.city,
      state: this.state.state,
      zip_code: this.state.zip_code,
      geo_point: "fadsfadss", // this needs to be changed some how
      user_id: 32 //this needs to be changed some how
    };

    if (
      newLocation.street != "" &&
      newLocation.city != "" &&
      newLocation.state != "" &&
      newLocation.house_number != "" &&
      newLocation.zip_code != ""
    ) {
      console.log("newLocation: ", newLocation);
      this.props.userLocation(newLocation);
    } else {
      return window.alert("Please fill in Required Field");
    }

    // window.location = "/";
  }

  render() {
    // need to change header from this file
    console.log("location C : ", this.state);
    return (
      <div>
        <Header />
        <h1>Address</h1>

        <h3>house number</h3>
        <NumberFormat
          format="######"
          placeholder="1234"
          onChange={this.handleHouseNumber.bind(this)}
        />

        <h3>Street</h3>
        <input
          type="text"
          placeholder="Melia Court"
          onChange={this.handleStreetAddress.bind(this)}
        />

        <h3>Unit</h3>
        <input
          type="text"
          placeholder="4"
          onChange={this.handleUnit.bind(this)}
        />

        <h3>Apartment Number</h3>
        <NumberFormat
          format="######"
          placeholder="403"
          onChange={this.handleApt_Num.bind(this)}
        />

        <h3>City</h3>
        <input
          type="text"
          placeholder="Honolulu"
          onChange={this.handleCity.bind(this)}
        />

        <h3>State</h3>
        <input
          type="text"
          placeholder="HI"
          maxLength="2"
          onChange={this.handleState.bind(this)}
        />

        <h3>ZipCode</h3>
        <NumberFormat
          format="#####"
          placeholder="96818"
          onChange={this.handleZipcode.bind(this)}
        />
        <br />
        <button onClick={this.submitLocation.bind(this)}>Create Account</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLocation: location => {
      dispatch(userLocation(location));
    }
  };
};

const ConnectedUserLocation = connect(null, mapDispatchToProps)(UserLocation);

export default ConnectedUserLocation;
