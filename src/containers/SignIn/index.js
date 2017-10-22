import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from "../../actions/Users"

const renderInput = field => (
    <div>
        <input {...field.input} type={field.type}/>
        {
            field.meta.touched &&
            field.meta.error &&
            <span className="error">{field.meta.error}</span>
        }
    </div>);
class Signin extends Component {
    handleFormSubmit({ email, password }) {
        console.log(email, password);
        // need something to log user in
        this.props.signinUser({ email, password });
    }
    render() {
        const { handleSubmit } = this.props; //
        return (
            <form
                className="ui form"
                onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
            >
                <div className="field">
                    <label>Email:</label>
                    <Field
                        name="email"                            // Specify field name
                        component={renderInput}        // Specify render component above
                        type="email"                            // Specify "type" prop passed to renderInput
                    />
                    {/* <input {...email} placeholder="john.doe@example.com" type="email" /> */}
                </div>
                <div className="field">
                    <label>Password:</label>
                    <Field
                        name="password"                        // Specify field name
                        component={renderInput}        // Specify render component above
                        type="password"                        // Specify "type" prop passed to renderInput
                    />
                    {/* <input {...password} placeholder="password" type="password" /> */}
                </div>
                <button action="submit" className="ui inverted blue button ">
                    Sign in
                </button>
            </form>
        );
    }
}


export default reduxForm({
    form: 'signin'    // no fields array given
})(
    connect(null, actions)(Signin)
);