import React from 'react';
import Nav from './Navbar.js';
import Home from './Home.js';
import About from './About';
import Footer from './Footer.js';
import './css/landing.css';
function Landing()
{
	return(
			
	<div className="landing">
	<Nav/>
	<Home/>
	<About/>
	<Footer/>
	</div>
	);
}

export default Landing;
