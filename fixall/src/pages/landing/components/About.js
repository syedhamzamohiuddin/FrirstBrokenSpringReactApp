import React from 'react';
import './css/about.css';
import brush from './imgs/paint1.svg';
import bulb from './imgs/bulb.png';
import wrench from './imgs/wrench.png';
import hammer from './imgs/hammer.png';

function Card(props)
{
	return(

			<li>
			<div className="card">
			<img src={props.image}/>
			<div className="card-content">
			<h3 className="card-title">{props.heading}</h3>
			<p >{props.desc}</p>
			</div>
			
			</div>

			</li>
	)

}
function About()
{
	return(
			<div className="about">
			<h1>About</h1>
			<p>FixAll connects users to nearby handymen to avail the following service.</p>
			<div className="services">
			<ul>
			<Card image={hammer} heading="Carpenter" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi at fuga earum voluptatum cupiditate nesciunt optio nobis delectus minus iste ."/>
			<Card image={wrench} heading="Plumber" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi at fuga earum voluptatum cupiditate nesciunt optio nobis delectus minus iste ."/>
			<Card image={bulb} heading="Electrician" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi at fuga earum voluptatum cupiditate nesciunt optio nobis delectus minus iste ."/>
			<Card image={brush} heading="Painter" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi at fuga earum voluptatum cupiditate nesciunt optio nobis delectus minus iste ."/>

				</ul>

			</div>

			</div>

	);
//Image by <a href="https://pixabay.com/users/kmicican-2305081/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1972925">kmicican</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1972925">Pixabay</a>

}

export default About;