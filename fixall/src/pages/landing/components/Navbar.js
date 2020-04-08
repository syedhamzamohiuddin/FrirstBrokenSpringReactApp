import React from 'react';
import logo from './imgs/toolbox.png';
import './css/navbar.css';
import {Link} from 'react-router-dom';
function Navbar()
{

	return(
			<div className="navbar">
			<div className="logo">
			<img  src={logo}/>
			</div>
			<div className="navItems">
			<ul>

				<li className="navItem"><a href="#">Home</a></li>
				<li className="navItem"><a href="#">About</a></li>
				<li className="navItem"><a href="#">Contact Us</a></li>
				<li className="navItem"><Link to="/login">Login</Link></li>

			</ul>

			</div>

			</div>
	);
}
export default Navbar;

