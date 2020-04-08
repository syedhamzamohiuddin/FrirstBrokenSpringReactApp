import React from 'react';
import Navbar from './components/Navbar';
import {connect} from 'react-redux';
import PropTypes from "prop-types";


import Shops from './components/Shops';
import Users from './components/Users';
import MyAccount from './components/MyAccount';
import Services from './components/Services';
import './c.css'
class Admin extends React.Component{
	
	static propTypes = {
		tab: PropTypes.string,
		isAuthenticated: PropTypes.bool
	}
	render()
	{
		let tt ;
		if(this.props.tab==='users'){
			tt=<Users/>;
		}
		else if(this.props.tab==='shops'){
			tt=<Shops/>;
		}
		else if(this.props.tab==='services'){
			tt=<Services/>;
		}
		else if(this.props.tab==='account'){
			tt=<MyAccount/>;
		}
	
		
		return(
				<div className='admin'>
				<Navbar/>
				{tt}
				</div>
				
		);
	}
}

const mapStateToProps = state=>({
	isAuthenticated: state.auth.isAuthenticated,
	tab: state.choosenTab.tab
});
export default connect(mapStateToProps)(Admin);
