import {connect} from 'react-redux';
import React, {Component} from 'react';
import {userLocation} from '../../actions/Users';
import user from './index';
import NumberFormat from 'react-number-format';
import ConnectedSignUp from './index';

class UserLocation extends Component{
	constructor (props){
		super(props);
		this.state = {
			house_number: '',
			street: '',
			unit: '',
			apt_num: '',
			city: '',
			state: '',
			zip_code: '',
			geo_point: '',
			user_id:''
		};
	}

	componentWillMount(){
		//used to test out front end. need this to run react
		console.log(this.state)
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
	submitLocation(evt){
		evt.preventDefault();
		console.log('Submit Location: ', this.state)

		let newLocation = {
			house_number: this.state.house_number,
			street:this.state.street,
			unit: this.state.unit,
			apt_num: this.state.apt_num,
			city: this.state.city,
			state: this.state.state,
			zip_code: this.state.zip_code,
			geo_point: 'fadsfadss', // this needs to be changed some how
			user_id: 32 //this needs to be changed some how
		}

	

		console.log('newLocation: ', newLocation)
		this.props.userLocation(newLocation);
		window.location = "/";

	}

	render (){
		console.log("render location: ", this.state);
		return(
			<div>
			<h1>Create Account</h1>
			 <form>
			 	<ConnectedSignUp />
				
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
					<br />
					<button onClick = {this.submitLocation.bind(this)
					}>Create Account</button>
				</form> 
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		userLocation: (location)=>{
			dispatch (userLocation(location))
		}
	}
}

const ConnectedUserLocation = connect(null, mapDispatchToProps)(UserLocation)

export default ConnectedUserLocation;