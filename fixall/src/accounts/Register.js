import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {register} from '../actions/Auth';
import PropTypes from "prop-types";

export class Register extends Component {

	state = {
			fullname:'',
			email:'',
			phone:'',
			password:'',
			password2:''

	}

	static propTypes = {
		register: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool
	}
	onSubmit = e =>{
		e.preventDefault();
		const  {fullname,email,phone,password, password2} = this.state;
		console.log(password+" "+password2);
		if(password!==password2||phone==""||password==password2==""||fullname=="")
			{
			console.log("not");
		//	this.props.createMessage({password: 'Passwords do not maltch'});
			}
		else{
			console.log('submit');
			const newUser = {
					fullname,
					password,

					email,
					phone,
			}
			this.props.register(newUser);
		}
	}
	
	onChange = e => this.setState({[e.target.name]:e.target.value});
	render()
	{
		const {fullname, email,phone,password,password2}
		= this.state;
		return(
				<div className="addForm">
				<form onSubmit={this.onSubmit}>
				<div className="inputs">
				<div classsName="input"><label>Full Name</label>
				<input type="text" className="" name="fullname" onChange={this.onChange} value={fullname}></input>
				</div>
				<div classsName="input"><label>email</label>
				<input type="text" className="" name="email" onChange={this.onChange} value={email}></input>
				</div>
				<div classsName="input"><label>phone</label>
				<input type="text" className="" name="phone" onChange={this.onChange} value={phone}></input>
				</div>
				<div classsName="input"><label>password</label>
				<input type="text" className="" name="password" onChange={this.onChange} value={password}></input>
				</div>
				<div classsName="input"><label>password2</label>
				<input type="text" className="" name="password2" onChange={this.onChange} value={password2}></input>
				</div>


				
				</div>
									
				<button type="submit" className="">Register</button>
				
				
				<p>
				Already have an account?<Link to="/login">Login</Link></p>
				</form>

				</div>		
		)
	}

}
const mapStateToProps = state=>({
	isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps,{register})(Register)


