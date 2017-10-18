import {connect} from 'react-redux';
import React, {Component} from 'react';
import {addUser, userLocation} from '../../actions/Users.js';
import PasswordMask from 'react-password-mask';
import NumberFormat from 'react-number-format';




class SignUp extends Component{
	constructor (props){
		super(props);
		this.state = {
			first_name: '',
      last_name: '',
      password: '',
			house_number: '',
			street: '',
			unit: '',
			apt_num: '',
			city: '',
			state: '',
			zip_code: '',
			phone: '',
		};
	}
	componentWillMount(){
		//used to test out front end. need this to run react
	} 

	handleUserName(e){
		this.setState({
			userName: e.target.value
		})
	}
	handlePassword(e){
		this.setState({
			password: e.target.value
		})
	}
	handleFirstName(e){
		this.setState({
			first_name: e.target.value
		})
	}
	handleLastName(e){
		this.setState({
			last_name: e.target.value
		})
	}
	handleAge(e){
		this.setState({
			age: e.target.value
		})
	}
	handleBirthDate(e){
		this.setState({
			birthDate: e.target.value
		})
	}
	handleHouseNumber(e){
		this.setState({
			house_number: e.target.value
		})
	}
	handleStreetAddress(e){
		this.setState({
			street: e.target.value
		})
	}
	handleUnit(e){
		this.setState({
			unit: e.target.value
		})
	}
	handleApt_Num(e){
		this.setState({
			apt_num: e.target.value
		})
	}
	handleCity(e){
		this.setState({
			city: e.target.value
		})
	}
	handleState(e){
		this.setState({
			state: e.target.value
		})
	}
	handleZipcode(e){
		this.setState({
			zip_code: e.target.value
		})
	}
	handleEmail(e){
		this.setState({
			email: e.target.value
		})
	}
	handlePhone(e){
		this.setState({
			phone: e.target.value
		})
	}

// kfladsjfkldsajflkdjfldasjldjdfklsjflasjflsdjlkf
	submitUser(evt){
		evt.preventDefault();
		console.log('userInput:',this.state)
			let newUser = {
				first_name: 'this.state.first_name',
				last_name: 'this.state.last_name',
				password: 'this.state.password',
				phone: '8081234567',
				active: 'true',
			}
			console.log('newcard:',newUser)
			this.props.addUser(newUser);
		}
		
///klfadsjlkfjdfjalkfjlfjsakl

	render (){
		console.log("render: ", this.state);
		return(
      <div>
      
			<form method = "post" action = "/api/user/new">
			<h3>First Name</h3>
				<input
				type ="text"
				placeholder ="John"
				onChange={this.handleFirstName.bind(this)}
				/>

			<h3>Last Name</h3>
				<input
				type ="text"
				placeholder ="Doe"
				onChange={this.handleLastName.bind(this)}
        />
        
        <h3>Password</h3>
				<PasswordMask
				placeholder = "Enter Password"
				value={this.state.password}
				onChange={this.handlePassword.bind(this)}
				useVendorStyles ={false}
        />
        
			<h3>House Number</h3>
				<input
				type ="text"
				placeholder ="1234"
				onChange={this.handleHouseNumber.bind(this)}
				/>

				<h3>Street</h3>
				<input
				type ="text"
				placeholder ="Melia Court"
				onChange={this.handleStreetAddress.bind(this)}
				/>

				<h3>Unit</h3>
				<input
				type ="text"
				placeholder ="4"
				onChange={this.handleUnit.bind(this)}
				/>

				<h3>Apartment Number</h3>
				<input
				type ="number"
				placeholder ="403"
				onChange={this.handleApt_Num.bind(this)}
				/>

			<h3>City</h3>
				<input
				type ="text"
				placeholder ="Honolulu"
				onChange={this.handleCity.bind(this)}
				/>

			<h3>State</h3>
				<input
				type ="text"
				placeholder ="HI"
				maxLength = "2"
				onChange={this.handleState.bind(this)}
				/>

			<h3>ZipCode</h3>
				<NumberFormat format = "#####" 
				placeholder ="96818"
				onChange={this.handleZipcode.bind(this)}
				/>

			<h3>Phone Number</h3>
				<NumberFormat format = "(###) ###-####" mask = "_"
				placeholder ="808-422-2222"
				onChange={this.handlePhone.bind(this)}
				/>

			<br />
			
			<button onClick = {this.submitUser.bind(this)}>Create Account</button>
		</form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		//whatever the action is 
		addUser: (text) => {
			dispatch(addUser(text))
		  }
		
	}
}

const ConnectedSignUp = connect(
	null,
	mapDispatchToProps  
)(SignUp)

export default ConnectedSignUp;