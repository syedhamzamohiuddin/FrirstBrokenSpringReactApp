import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import '../css/table.css'

class List extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
				services:[{}],
				categories:[{}]
		}
	}

	static propTypes={
		token:PropTypes.string
	}

	getAllServicesAndCategories=()=>{
		const token = this.props.token;
		//	console.log(token);
		const config = {

				headers : {
					'Content-Type': 'application/json'
				}
		}

		if(token)
		{
			config.headers['Authorization'] = `${token}`;

		}
		//services
		axios.get('http://localhost:8080/services',config)
		.then(res =>{
			console.log(res.data);
			this.setState({services:res.data.services});
			//	console.log(this.state.users);

		}).catch(err=>{
			console.log("getusersfailed");
			console.log(err.response);
			console.log(err);

		})

		//categories
		axios.get('http://localhost:8080/categories',config)
		.then(res =>{
			console.log("passed");
			this.setState({categories:res.data.users});
			//	console.log(this.state.users);

		}).catch(err=>{
			console.log("getusersfailed");
			console.log(err.response);
			console.log(err);

		})
	}
	componentDidMount(){

		this.getAllServicesAndCategories();
	}
	onChange = e =>{
		//this.setState({[e.target.name]:e.target.value});
		let row_index=e.currentTarget.parentElement.parentElement.id;

		const services2=this.state.services;
		console.log(services2[row_index][e.target.name]);
		services2[row_index][e.target.name]=e.target.value	;
		console.log(services2[row_index][e.target.name]);
		this.setState({services:services2});

	}
	
	onChange2 = e =>{
		//this.setState({[e.target.name]:e.target.value});
		let row_index=e.currentTarget.parentElement.parentElement.id;

		const categories2=this.state.categories;
		console.log(categories2[row_index][e.target.name]);
		categories2[row_index][e.target.name]=e.target.value	;
		console.log(categories2[row_index][e.target.name]);
		this.setState({categories:categories2});

	}
	
	
	update= e=>{
		const token = this.props.token;

		const services2=this.state.services;
		let row_index=e.currentTarget.parentElement.parentElement.id;
		let service=services2[row_index];
		const config = {

				headers : {
					'Content-Type': 'application/json'
				}
		}
		if(token)
		{
			config.headers['Authorization'] = `${token}`;


		}

		const body=JSON.stringify(service);
		console.log(body);
		axios.post('http://localhost:8080/updateService',body,config)
		.then(res=>{

		})
		.catch(er=>{

		})
	}
	
	update2= e=>{
		const token = this.props.token;

		const categories2=this.state.categories;
		let row_index=e.currentTarget.parentElement.parentElement.id;
		let category=categories2[row_index];
		const config = {

				headers : {
					'Content-Type': 'application/json'
				}
		}
		if(token)
		{
			config.headers['Authorization'] = `${token}`;


		}

		const body=JSON.stringify(category);
		console.log(body);
		axios.post('http://localhost:8080/updateCategory',body,config)
		.then(res=>{

		})
		.catch(er=>{

		})
	}

	delete=e=>{

		const token = this.props.token;

		const services2=this.state.services;
		let row_index=e.currentTarget.parentElement.parentElement.id;
		let service=services2[row_index];
		const config = {

				headers : {
					'Content-Type': 'application/json'
				}
		}
		if(token)
		{
			config.headers['Authorization'] = `${token}`;


		}
		const url = 'http://localhost:8080/deleteService?id='+service.service_id;
		axios.delete(url,config)

	}
	
	delete2=e=>{

		const token = this.props.token;

		const categories2=this.state.categories;
		let row_index=e.currentTarget.parentElement.parentElement.id;
		let category=categories2[row_index];
		const config = {

				headers : {
					'Content-Type': 'application/json'
				}
		}
		if(token)
		{
			config.headers['Authorization'] = `${token}`;


		}
		const url = 'http://localhost:8080/deleteCategory?id='+category.role_id;
		axios.delete(url,config)

	}

	render()
	{
		//services
		const ss=this.state.services;
		let i=0;
		const services=ss.map((service)=>{
			return(
			<tr id={i} key={i++} >
			<td><input  type="text" value={service.service_id} name="service_id"/ ></td>
			<td><input onChange={this.onChange} type="text" value={service.description} name="description"/></td>
			<td><input onChange={this.onChange} type="text" value={service.role_id} name="role_id" /></td>
			<td><input   className="butn update" style={{width: '20px'}} onClick={this.update} type="button"/></td>
			<td><input  className="butn delete" style={{width: '20px'}}  onClick={this.delete}type="button"/></td>
			</tr>)
		});
		
		
		//categories
		const cc=this.state.categories;
		i=0;
		const categories=cc.map( (category)=>{
			return(
					<tr id={i} key={i++} >
					<td><input  type="text" value={category.role_id} name="role_id"/ ></td>
					<td><input onChange={this.onChange2} type="text" value={category.role_name} name="role_name"/></td>
					<td><input className="butn update"  style={{width: '20px'}} onClick={this.update2} type="button"/></td>
					<td><input className="butn delete" style={{width: '20px'}} onClick={this.delete2}type="button"/></td>
					</tr>
			
			
			)
				
		});
		return(
				<div>
				
				<div className="refWrapper">
				<button className="refresh" onClick={this.getAllServicesAndCategories}>Refresh</button>

				
				</div>
				
				
				<div className="tablesWrapper">

				<div className="table">
				<h3 style={{textAlign:'center'}}>Services</h3>
				<table>
				<thead>
				<tr>
				<th>id</th>
				<th>description</th>
				<th>category id</th>

				<th>update</th>
				<th>delete</th>
				</tr>
				</thead>
				<tbody>
				{services}
				</tbody>
				</table>
				</div>
				
				<div className="table">
				<h3  style={{textAlign:'center'}}>Categories</h3>

				<table>
				<thead>
				<tr>
				<th>id</th>
				<th>description</th>

				<th>update</th>
				<th>delete</th>
				</tr>
				</thead>
				<tbody>
				{categories}
				</tbody>
				</table>
				</div>


				</div>
				</div>
				


		);
	}

}
const mapStateToProps = state=>({
	token: state.auth.token
});
export default connect(mapStateToProps)(List);


