import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
class Signin extends Component {
    render(){

    }
}


export default reduxForm({
    form: 'signin',
    fields: ['email', 'password'] 
})(Signin);