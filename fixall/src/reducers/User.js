import {
	USER_LOADED2,
	
} from '../actions/Types'

const initalState = {
		user:null
};

export default function(state = initalState, action){
	switch(action.type){
	case USER_LOADED2:
		localStorage.setItem('role',action.payload.access_role);
	//	console.log
		return {
		user: action.payload
		
	};
	
	default:
		return state;
	}
}