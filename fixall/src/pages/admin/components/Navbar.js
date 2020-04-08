import React from 'react';
import './css/navbar.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setTab} from '../../../actions/choosenTab';
import PropTypes from "prop-types";
class Navbar extends React.Component
{

	
	static propTypes = {
		setTab: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool
	}
	onClick = e=> {
		this.props.setTab(e.target.innerHTML);
		console.log(this.props.body);
	}
	render(){
		return(
				<div className="navbar2">
				 
				<div className="navItems2">
				<ul>

					<li className="navItem" onClick={this.onClick} ><Link to="#">Users</Link></li>
					<li className="navItem" onClick={this.onClick}><Link to="#">Shops</Link></li>
					<li className="navItem" onClick={this.onClick}><Link to="#">Services</Link></li>
					<li className="navItem" onClick={this.onClick}><Link to="#">My Account</Link></li>

				</ul>

				</div>
				

				</div>
		);
	}
	
}

const mapStateToProps = state=>({
	isAuthenticated: state.auth.isAuthenticated,
	body:state.choosenTab.tab
});
export default connect(mapStateToProps,{setTab})(Navbar);

