import React from 'react';
import {Link} from 'react-router-dom';
import './css/servicesTab.css'

import CreateForm from './crudServices/create';
import List from './crudServices/List';

class Services extends React.Component
{
	
	
	
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
				<h2>Services</h2>
				<ul className="options">
				<li onClick={this.onClick}><Link to="#">Add</Link></li>
				<li onClick={this.onClick}><Link to="#">List All</Link></li>
				</ul>
				{this.state.form}

				</div>
		
		);
	}

}

export default Services;
