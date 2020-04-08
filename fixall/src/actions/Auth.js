import axios from 'axios';
import {returnErrors } from './messages';
import {
	USER_LOADED2,
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	LOGOUT_SUCCESS,
	REGISTER_FAILED,
	REGISTER_SUCCESS,
} from './Types';

export const loadUser = ()=> (dispatch,getState)=>{
	
	dispatch({type: USER_LOADING});
	
	const token = getState().auth.token;
	const config = {
			
			headers : {
				'Content-Type': 'application/json'
			}
	}
	
	if(token)
		{
		config.headers['Authorization'] = `${token}`;
		
		}
	
	axios.get('http://localhost:8080/user/',
		
	config)
	
	.then(res =>{
		console.log(res.data);
		dispatch({
			type: USER_LOADED,
			payload: res.data
		})
		
		dispatch({
			type: USER_LOADED2,
			payload: res.data
		})
		
	}).catch(err=>{
		console.log("getuserfailed");
		console.log(err.response);
		console.log(err);
		dispatch(returnErrors(err.response.data,
				err.response.status));
		dispatch({
			type: AUTH_ERROR
		});
	})
	
}

//login user
export const login = (phone,password)=> dispatch=>{

	const config = {
			
			headers : {
				'Content-Type': 'application/json'
			}
	}

	const body = JSON.stringify({phone,password});
	console.log(body);
	axios.post('http://localhost:8080/authenticate',body,config)
	.then(res =>{
		console.log(res);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data
		})
	}).catch(err=>{
		dispatch(returnErrors(err.response.data,
				err.response.status));
		dispatch({
			type: LOGIN_FAILED
		});
	})
	
}
//logout user
export const logout = ()=> (dispatch,getState)=>{
	
	
	
	const token = getState().auth.token;
	
	const config = {
			
			headers : {
				'Content-Type': 'application/json'
			}
	}
	
	if(token)
		{
		config.headers['Authorization'] = `Token ${token}`;
		
		}
	
	axios.put('http://localhost:8080/logout',null,config)
	.then(res =>{
		console.log("passed");
		dispatch({
			type: LOGOUT_SUCCESS,
 		})
	}).catch(err=>{
		console.log("getlogoutfailed");
		console.log(err.response);
		console.log(err);
		dispatch(returnErrors(err.response.data,
				err.response.status));
	
	})
	
}

export const register = ({fullname, password,email,phone})=> dispatch=>{

	const config = {
			
			headers : {
				'Content-Type': 'application/json'
			}
	}
	const access_role='2';
	const body = JSON.stringify({fullname, password,email,phone,access_role});
	console.log(body);
	axios.post('http://localhost:8080/register',body,config)
	.then(res =>{
		console.log(res);
		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data
		})
	}).catch(err=>{
		console.log(err);
		dispatch(returnErrors(err.response.data,
				err.response.status));
		dispatch({
			type: REGISTER_FAILED
		});
	})
	
}

export const addUser = ({fullname, password,email,phone, access_role})=> (dispatch,getState)=>{


	const token = getState().auth.token;
	console.log(token);
	const config = {
			
			headers : {
				'Content-Type': 'application/json'
			}
	}
	
	if(token)
		{
		config.headers['Authorization'] = `${token}`;
		
		}
	const body = JSON.stringify({fullname, password,email,phone,access_role});
	axios.post('http://localhost:8080/addUser',body,config)
	.then(res =>{
		console.log(res);
		
	}).catch(err=>{
		console.log(err);
		dispatch(returnErrors(err.response.data,
				err.response.status));
	
	})
	
}

