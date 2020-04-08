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
				users:[{}],
		}
	}

	static propTypes={
		token:PropTypes.string
	}
	 getAllUsers=()=>{
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
				console.log("dfd");
				console.log(config.headers['Authorization']);

			}

			axios.get('http://localhost:8080/users',config)
			.then(res =>{
				console.log("passed");
				this.setState({users:res.data.users});
				//	console.log(this.state.users);

			}).catch(err=>{
				console.log("getusersfailed");
				console.log(err.response);
				console.log(err);

			})
	}
	componentDidMount(){

		this.getAllUsers();
	}
	onChange = e =>{
		//this.setState({[e.target.name]:e.target.value});
		let row_index=e.currentTarget.parentElement.parentElement.id;

		const users2=this.state.users;
		console.log(users2[row_index][e.target.name]);
		users2[row_index][e.target.name]=e.target.value	;
		console.log(users2[row_index][e.target.name]);
		this.setState({users:users2});

	}
	update= e=>{
		const token = this.props.token;

		const users2=this.state.users;
		let row_index=e.currentTarget.parentElement.parentElement.id;
		let user=users2[row_index];
		const config = {

				headers : {
					'Content-Type': 'application/json'
				}
		}
		if(token)
		{
			config.headers['Authorization'] = `${token}`;


		}

		const body=JSON.stringify(user);
		console.log(body);
		axios.post('http://localhost:8080/updateUser',body,config)
		.then(res=>{

		})
		.catch(er=>{

		})
	}

	delete=e=>{

		const token = this.props.token;

		const users2=this.state.users;
		let row_index=e.currentTarget.parentElement.parentElement.id;
		let user=users2[row_index];
		const config = {

				headers : {
					'Content-Type': 'application/json'
				}
		}
		if(token)
		{
			config.headers['Authorization'] = `${token}`;


		}
		const url = 'http://localhost:8080/deleteUser?id='+user.id;
		axios.delete(url,config)
		
	}

	render()
	{
		let nn="syd hamza mohiuddin";
		const uu=this.state.users;
		console.log(uu);
		let i=0;
		const users=uu.map((user)=>{
			return(<tr id={i} key={i++} >
			<td><input  type="text" value={user.id} name="id"/ ></td>
			<td><input onChange={this.onChange} type="text" value={user.fullname} name="fullname"/></td>
			<td><input onChange={this.onChange} type="text" value={user.phone} name="phone" /></td>
			<td><input onChange={this.onChange} type="text" value={user.email} name="email"/ ></td>
			<td><input onChange={this.onChange} type="text" value={user.access_role} name="access_role"/ ></td>
			<td><input  type="text" value={user.reg_date} name="reg_date"/ ></td>
			<td><input className="butn update" style={{width: '20px'}} onClick={this.update} type="button"/></td>
			<td><input  className="butn delete" style={{width: '20px'}} onClick={this.delete}type="button"/></td>
			</tr>)
		});
		return(
				<div>
				<div className="refWrapper">
				<button className="refresh" onClick={this.getAllUsers}>Refresh</button>

				
				</div>
				<div className="table">
				<h3  style={{textAlign:'center'}}>All Users</h3>

				<table>
				<thead>
				<tr>
				<th>id</th>
				<th>fullname</th>
				<th>phone</th>
				<th>email</th>

				<th>access_role</th>
				<th>reg_date</th>
				<th>update</th>
				<th>delete</th>
				</tr>
				</thead>
				<tbody>
				{users}
				</tbody>
				</table>
</div>
				</div>);
	}

}
const mapStateToProps = state=>({
	token: state.auth.token
});
export default connect(mapStateToProps)(List);


