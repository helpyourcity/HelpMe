import { connect } from "react-redux";
import React, { Component } from "react";
import { addUser, userLocation } from "../../actions/Users.js";
import PasswordMask from "react-password-mask";
import NumberFormat from "react-number-format";
import Header from "../Header";
import { Redirect, withRouter } from "react-router";

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			redirectAddress: false
		};
	}
	componentWillMount() {
		//used to test out front end. need this to run react
	}

	handlePassword(e) {
		this.setState({
			password: e.target.value
		});
	}
	handleFirstName(e) {
		this.setState({
			first_name: e.target.value
		});
	}
	handleLastName(e) {
		this.setState({
			last_name: e.target.value
		});
	}

	handleEmail(e) {
		this.setState({
			email: e.target.value
		});
	}

	handlePhone(e) {
		this.setState({
			phone: e.target.value
		});
	}

	redirectLocation() {
		// need this function to redirect user page to address
		this.setState({
			redirectAddress: true
		});
	}

	submitUser(evt) {
		//maybe take away submit function?
		evt.preventDefault();
		this.redirectLocation();
		console.log("userInput:", this.state);
		let newUser = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			password: this.state.password,
			phone: this.state.phone,
			active: true
		};
		console.log("newcard:", newUser);
		this.props.addUser(newUser);
	}

	render() {
		if (this.state.redirectAddress) {
			return <Redirect to="/create/address" />;
		}
		console.log("User C", this.state);
		return (
			<div>
				<h1>User Info</h1>
				<Header />
				<h3>First Name</h3>
				<input
					type="text"
					placeholder="John"
					onChange={this.handleFirstName.bind(this)}
				/>
				<h3>Last Name</h3>
				<input
					type="text"
					placeholder="Doe"
					onChange={this.handleLastName.bind(this)}
				/>
				<h3>Email</h3>
				<input
					type="text"
					placeholder="youremail@gmail.com"
					onChange={this.handleEmail.bind(this)}
				/>
				<h3>Password</h3>
				<PasswordMask
					placeholder="Enter Password"
					value={this.state.password}
					onChange={this.handlePassword.bind(this)}
					useVendorStyles={false}
				/>
				<br />
				<button onClick={this.submitUser.bind(this)}>Create Account</button>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		//whatever the action is
		addUser: text => {
			dispatch(addUser(text));
		}
	};
};

const ConnectedSignUp = connect(null, mapDispatchToProps)(SignUp);

export default withRouter(ConnectedSignUp);
