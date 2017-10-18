import React, { Component} from 'react';
// import logo from './logo.svg';
import {connect} from 'react-redux'
import {signIn} from '../../actions/Users.js'
import './App.css';
import SignUp from '../SignUp/'

class App extends Component {
    render() {
        return (
        <div>
            <h1>Sign Up!</h1>
            <SignUp/>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        users: state.users
    }
}
const ConnectedApp = connect(mapStateToProps)(App)
export default ConnectedApp;