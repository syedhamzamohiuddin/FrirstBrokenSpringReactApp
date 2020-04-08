import React from 'react';
import {Link} from 'react-router-dom';

class Shops extends React.Component
{
	render()
	{
		return(
				<div className="tab">
				<h2>Shops</h2>
				<ul className="options">
				<li><Link  to="#">Add</Link></li>
				<li><Link to="#">Delete</Link></li>
				<li><Link to="#">Update</Link></li>
				<li><Link to="#">List All</Link></li>
				</ul>
				</div>
		
		);
	}

}

export default Shops;
