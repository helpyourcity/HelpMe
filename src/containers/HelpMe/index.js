import React, { Component } from 'react';
import ErrorModal from '../ErrorModal';

class HelpMe extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      title: '',
      phoneNumber: '',
      errors: {
        title: '',
        phoneNumber: ''
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
    this.setState({
      [target.name]: target.value
    }, () => {
      this.validateField(target.name, target.value);
    });
  }

  validateField(fieldName, value) {
    let errors = this.state.errors;
    let titleValid = this.state.titleValid;
    let phoneNumberValid = this.state.phoneNumberValid;

    switch(fieldName) {
      case 'title':
        titleValid = value.length >= 5;
        errors.title = titleValid ? '' : 'Title must be longer than five characters.';
        break;
      case 'phoneNumber':
        phoneNumberValid = value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
        errors.phoneNumber = phoneNumberValid ? '' : 'Phone number must be a valid number.';
        break;
      default:
        break;
    }

    this.setState({
      errors,
      titleValid,
      phoneNumberValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({
      formValid: this.state.titleValid && this.state.phoneNumberValid
    });
  }

  handleError(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  handleSubmitButton(e) {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;

      // make xhr request here
      console.log("GOOD");
      this.setState({
        title: '',
        phoneNumber: '',
        formValid: false
      });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitButton}>
        <div>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <span>{this.state.errors.title || 'No errrors'}</span>
        </div>
        <div>
          <input
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          />
          <span>{this.state.errors.phoneNumber || 'No errors'}</span>
        </div>
        <input
          name="submit"
          type="submit"
          disabled={!this.state.formValid}
        />
      </form>
    );
  }
}

export default HelpMe;