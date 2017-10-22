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
			email:'',
			phone: '',
		};
	}
	componentWillMount(){
		//used to test out front end. need this to run react
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
	handleBirthDate(e){
		this.setState({
			birthDate: e.target.value
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

	submitUser(evt){ //maybe take away submit function? 
		evt.preventDefault();
		console.log('userInput:',this.state)
			let newUser = {
				first_name: 'this.state.first_name',
				last_name: 'this.state.last_name',
				email: 'gmail.com',
				password: 'this.state.password',
				phone: '8081234567',
				active: 'true',
			}
			console.log('newcard:',newUser)
			this.props.addUser(newUser);
		}

	render (){
		console.log("render: ", this.state);
		return(
      <div>
      
			<form method = "post" action = "/api/user/new">
			<h3>First Name</h3>
				<input
				type ="text"
				placeholder ="John"
				onChange={this.handleFirstName.bind(this)}/>

			<h3>Last Name</h3>
				<input
				type ="text"
				placeholder ="Doe"
				onChange={this.handleLastName.bind(this)}/>
		
		<h3>Email</h3>
		<input
		type ="text"
		placeholder ="jbob@gmail.com"
		onChange={this.handleEmail.bind(this)}/>
        
        <h3>Password</h3>
				<PasswordMask
				placeholder = "Enter Password"
				value={this.state.password}
				onChange={this.handlePassword.bind(this)}
				useVendorStyles ={false}/>
        
			<h3>Phone Number</h3>
				<NumberFormat format = "(###) ###-####" mask = "_"
				placeholder ="808-422-2222"
				onChange={this.handlePhone.bind(this)}	/>

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