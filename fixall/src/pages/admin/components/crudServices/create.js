import React from 'react';
import {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import '../css/form.css';
import axios from 'axios';

class Create extends Component
{
	componentDidMount()
	{
		this.getCategories();
	}
	state = {
			service_id:'',
			description:'',
			role_id:0,
			categories:[],
			cat_id:'',
			cat_desc:''
	}

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		token:PropTypes.string
	}
	
	getCategories=()=>{
		const token = this.props.token;
		const config = {

				headers : {
					'Content-Type': 'application/json'
				}
		}
		if(token)
		{
			config.headers['Authorization'] = `${token}`;


		}
		
		axios.get('http://localhost:8080/categories',config)
		.then(res =>{
			console.log("passed");
			this.setState({categories:res.data.users});
				console.log(this.state.categories);

		}).catch(err=>{
			console.log("getusersfailed");
			console.log(err.response);
			console.log(err);

		})
	}
	
	addCategory=(newCategory)=>{
		const token = this.props.token;
		const config = {

				headers : {
					'Content-Type': 'application/json'
				}
		}
		if(token)
		{
			config.headers['Authorization'] = `${token}`;


		}
		const body=JSON.stringify(newCategory);
		console.log("category=:"+body);
		
		axios.post("http://localhost:8080/addCategory",body,config)
		.then(res=>{
			this.getCategories();

		}).catch(er=>{
			
		})
	}
	addService=(newService )=>{
		
		const token = this.props.token;
		const config = {

				headers : {
					'Content-Type': 'application/json'
				}
		}
		if(token)
		{
			config.headers['Authorization'] = `${token}`;


		}
		const body=JSON.stringify(newService);
		console.log(body);
		
		axios.post("http://localhost:8080/addService",body,config).then(res=>{
			this.getCategories();
			
		}).catch(er=>{
			
		})
	}
	onSubmit = e=>{
		e.preventDefault();
		console.log(e.target);
		console.log(e.currentTarget);
		const  {service_id,description, role_id} = this.state;


		console.log('submit');
		const newService = {
				service_id,description, role_id
		}
		this.addService(newService);

	}
	onSubmit2=e=>{
		e.preventDefault();

		const role_id=this.state.cat_id;
		const role_name=this.state.cat_desc;
		this.addCategory({role_id,role_name});
	}
	onChange = e => this.setState({[e.target.name]:e.target.value});

	render()
	{
		const {service_id,description}
		= this.state;
		const cat_id=this.state.cat_id;
		const cat_desc=this.state.cat_desc;
			const cats = this.state.categories;
		const options = cats.map((option)=>{
			return <option value={option.role_id}>{option.role_name}</option>;
		})
		return(
				<div className="formWrapper">
				<div className="addForm">

				<form onSubmit={this.onSubmit}>
				<h3>Add Service</h3>
				<div className="inputs">
				<div className="input"><label style={{paddingRight:'50px'}}>ID:</label>
				<input type="text" className="" name="service_id" onChange={this.onChange} value={service_id}></input>
				</div>
				<div className="input"> <label style={{paddingRight:'30px'}}>Desc:</label>
				<input type="text" className="" name="description" onChange={this.onChange} value={description}></input>
				</div>
				<div className="input"><label>Category:</label>
				 <select name="role_id" onChange={this.onChange}>
				  {options}
				</select> </div>


				</div>

				<div className="buttonWrapper"	>	
				<button type="submit" className="reg">Register</button>
				</div>


				</form>
				
				
				</div>
				
				
				<div className="addForm">

				<form onSubmit={this.onSubmit2}>
				<h3>Add Category</h3>
				<div className="inputs">
				<div className="input"><label style={{paddingRight:'20px'}}>ID:</label>
				<input type="text" className="" name="cat_id" onChange={this.onChange} value={cat_id}></input>
				</div>
				<div className="input"> <label>Desc:</label>
				<input type="text" className="" name="cat_desc" onChange={this.onChange} value={cat_desc}></input>
				</div>
				


				</div>

				<div className="buttonWrapper"	>	
				<button type="submit"className="reg">Register</button>
				</div>


				</form>
				
				
				</div>				</div>


		);

	}

}
const mapStateToProps = state=>({
	isAuthenticated: state.auth.isAuthenticated,
	token: state.auth.token

});
export default connect(mapStateToProps)(Create);



