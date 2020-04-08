import axios from 'axios';
import {returnErrors } from './messages';
import {
	ADD_USER,
	DELETE_USER,
	GET_USERS,
	UPDATE_USER
} from './Types';

export const getUsers = ()=> (dispatch,getState)=>{
	
	const token = getState().auth.token;
	//console.log(token);
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
	
	axios.get('http://localhost:8080/persons',config)
	.then(res =>{
		console.log("passed");
		dispatch({
			type: GET_USERS,
			payload: res.data
		})
	}).catch(err=>{
		console.log("getuserfailed");
		console.log(err.response);
		console.log(err);
		dispatch(returnErrors(err.response.data,
				err.response.status));
		
	})
	
}

//login user
export const login = (username,password)=> dispatch=>{

	const config = {
			
			headers : {
				'Content-Type': 'application/json'
			}
	}

	const body = JSON.stringify({username,password});
	console.log(body);
	axios.post('http://localhost:8080/authenticate',body,config)
	.then(res =>{
		
		 
	}).catch(err=>{
		
	})
	
}




