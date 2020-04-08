import React from 'react';
import {getUsers} from '../../../actions/users';
import {Link} from 'react-router-dom';
import './css/users.css';
import {connect} from "react-redux";
import PropTypes from "prop-types";

import CreateForm from './crudUser/Create';
import List from './crudUser/List';


class Users extends React.Component
{
	
	static propTypes = {
		getUsers: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool
		
	}
	
	 constructor(props)
	  {
	    super(props);
	    this.state = {
	     form:null
	      
	    }
	  }
	onClick = e=> {
		let x=e.target.innerHTML;
		let f;
		switch(x)
		{
		case `Add`:
			f=<CreateForm/>;
			break;
		case `List All`:
			f=<List/>;
			break;
			
		}
		this.setState({form:f});
		console.log(x);
	}
	render()
	{
		
		
		return(
				<div className="tab">
				<h2>Users</h2>

				
				<ul className="options">
				<li onClick={this.onClick}><Link to="#">Add</Link></li>
				<li onClick={this.onClick}><Link to="#">List All</Link></li>
				</ul>
				{this.state.form}
		</div>
		);
	}

}

const mapStateToProps = state=>({
	isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps,{getUsers})(Users);
