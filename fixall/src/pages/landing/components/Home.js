import React from 'react';
import './css/home.css';
import {Link} from 'react-router-dom';
function Home()
{
	return(
			<div className="home-background">
			<div className="home-contents">
			<h1>Welcome to FixAll</h1>
			<p>Register Now and get things fixed.</p>
			<Link to="/register" className="btn">Register</Link>

			</div>
			</div>

	);
}

export default Home;
