import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {addUser} from '../../../../actions/Auth';
import {connect} from "react-redux";
import '../css/form.css';

class Create extends Component
{
	state = {
			fullname:'',
			email:'',
			phone:'',
			password:'',
			password2:'',
			access_role:''

	}

	static propTypes = {
		addUser: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool
	}
	onSubmit = e =>{
		e.preventDefault();
		const  {fullname,email,phone,password, password2, access_role} = this.state;
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
					access_role,
			}
			this.props.addUser(newUser);
		}
	}
	onChange = e => this.setState({[e.target.name]:e.target.value});
	
	render()
	{
		const {fullname, email,phone,password,password2,access_role}
		= this.state;
		let pad='10px';
		return(
				<div className="addForm">
				
				<form onSubmit={this.onSubmit}>
<div className="inputs">
				<div className="input"> <label style={{paddingRight:'20px'}}>Full Name:</label>
				<input type="text" className="" name="fullname" onChange={this.onChange} value={fullname}></input>
				</div>
				<div className="input"><label style={{paddingRight:'55px'}}>Email:</label>
				<input type="text" className="" name="email" onChange={this.onChange} value={email}></input>
				 </div>
				<div className="input"><label style={{paddingRight:'50px'}}>Phone:</label>
				<input type="text" className="" name="phone" onChange={this.onChange} value={phone}></input>
				 </div>
				<div className="input">
				<label style={{paddingRight:'62px'}}>Role:</label>
				<input type="text" className="" name="access_role" onChange={this.onChange} value={access_role}></input>
				 </div>
				<div className="input"> <label style={{paddingRight:'25px'}}>Password:</label>
				<input type="password" className="" name="password" onChange={this.onChange} value={password}></input>
				</div>
				<div className="input"> <label style={{paddingRight:'40px'}}>Confirm:</label>
				<input type="password" className="" name="password2" onChange={this.onChange} value={password2}></input>
				</div>

				</div>
				
							<div className="buttonWrapper"	>	
				<button type="submit" className="reg">Register</button>
				</div>
				
				
				</form>
				</div>
		
		);
		
	}

}
const mapStateToProps = state=>({
	isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps,{addUser})(Create);



