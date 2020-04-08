import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {login,loadUser} from '../actions/Auth';
export class Login extends Component {

	state = {

			phone:'',
			password:'',

	};

	static propTypes = {
		login: PropTypes.func.isRequired,
		loadUser:PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool,
		user:PropTypes.object.isRequired
	}
	onSubmit = e =>{
		e.preventDefault();
		this.props.login(this.state.phone,this.state.password);
	};

	onChange = e => this.setState({[e.target.name]:e.target.value});

	render()
	{
		if(this.props.isAuthenticated)
		{ 


			if(this.props.user.user===null)
			{
				this.props.loadUser();
			}
			else{
				console.log(this.props.user.user.access_role);
				if(this.props.user.user.access_role===0)
				{
					return <Redirect to="/admin"/>;

				}
				else {
					return <Redirect to="/service"/>;
				}
			}

		}
		const {phone,password}
		= this.state;
		return(
				<div className="login">
				<div style={{backgroundColor:'#2e3436'}}className="addForm">
				
				<form onSubmit={this.onSubmit}>

				<div className="inputs">

				</div>
				<div classsName="input">
				<label style={{paddingRight:'30px'}}>Phone:</label>
				<input type="text" className="" name="phone" onChange={this.onChange} value={phone}></input>

				</div>

				<div classsName="input">
				<label style={{paddingRight:'6px'}}>Password:</label>
				<input type="password" className="" name="password" onChange={this.onChange} value={password}></input>

				</div>
				<button type="login" className="">Login</button>


				<p>
				Don't have an account?<Link to="/register">Register</Link></p>
				</form>

				</div>	
				</div>
					
		)
	}

}

const mapStateToProps = state=>({
	isAuthenticated: state.auth.isAuthenticated,
	user:state.user
});
export default connect(mapStateToProps,{login,loadUser})(Login)


