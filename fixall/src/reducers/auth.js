import {
	USER_LOADED,
	AUTH_ERROR,
	USER_LOADING,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAILED
} from '../actions/Types'

const initalState = {
		token: null,
		isAuthenticated:null,
		isLoading: false,
		user: null
};

export default function(state = initalState, action){
	switch(action.type){
	case USER_LOADING:
		return {
		...state,
		isLoading:true
	};
	case USER_LOADED:
		localStorage.setItem('role',action.payload.access_role);
		return {
		...state,
		isLoading:false,
		isAuthenticated :true,
		user: action.payload
		
	};
	
	case LOGIN_SUCCESS:
	case REGISTER_SUCCESS:
		localStorage.setItem('token',action.payload.jwt);
		
		return {
			...state,
			...action.payload,
			isAuthenticated :true,
			user: action.payload,
			isLoading: false,
			token: action.payload.jwt
		}
	case LOGOUT_SUCCESS:
	case AUTH_ERROR:
	case LOGIN_FAILED:
	case REGISTER_FAILED:
		localStorage.removeItem('token');
		return{
			...state,
			token:null,
			user:null,
			isAuthenticated:false,
			isLoading:false
			
		};
	default:
		return state;
	}
}