import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import * as actions from "../../actions/Users";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from "react-router";

const renderInput = field => (
  <div>
    <input {...field.input} type={field.type} />
    {field.meta.touched &&
      field.meta.error && <span className="error">{field.meta.error}</span>}
  </div>
);

class Signin extends Component {
  constructor(props) {
    console.log("props", props);
    super(props);
    this.state = {
      redirectAddress: false
    };
  }
  redirectLocation() {
    // need this function to redirect user page to address
    this.setState({
      redirectAddress: true
    });
  }

  handleFormSubmit({ email, password }) {
    console.log(email, password);
    // need something to log user in
    this.redirectLocation();
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          <strong> ERROR ERROR</strong>
        </div>
      );
    }
  }

  render() {
    //if prop happens do redirect, else continue to render
    if (
      this.state.redirectAddress &&
      this.props.authenticated.authenticated === true
    ) {
      return <Redirect to="/" />;
    } else {
      const { handleSubmit } = this.props; //
      return (
        <form
          className="ui form"
          onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        >
          <div className="field">
            <label>Email:</label>
            <Field
              name="email" // Specify field name
              component={renderInput} // Specify render component above
              type="email" // Specify "type" prop passed to renderInput
            />
            {/* <input {...email} placeholder="john.doe@example.com" type="email" /> */}
          </div>
          <div className="field">
            <label>Password:</label>
            <Field
              name="password" // Specify field name
              component={renderInput} // Specify render component above
              type="password" // Specify "type" prop passed to renderInput
            />
            {/* <input {...password} placeholder="password" type="password" /> */}
          </div>
          {this.renderAlert()}
          <button action="submit" className="ui inverted blue button ">
            Signin
          </button>
        </form>
      );
    }
  }
}
function mapStateToProps(state) {
  console.log("this state", state);
  return {
    errorMessage: state.users.error,
    authenticated: state.users
  };
}

export default reduxForm({
  form: "signin" // no fields array given
})(connect(mapStateToProps, actions)(Signin));
