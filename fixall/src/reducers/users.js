import {
	ADD_USER,
	DELETE_USER,
	GET_USERS,
	UPDATE_USER
} from '../actions/Types'

const initalState = {
		users: {}
};

export default function(state = initalState, action){
	switch(action.type){
	case ADD_USER:
		return {
		...state,
		user: action.payload
	}
		
	case DELETE_USER:
	case UPDATE_USER:
	case GET_USERS:
	
	
	

	default:
		return state;
	}
}