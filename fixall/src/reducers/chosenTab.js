import {
	USERS_SELECTED,
	SHOPS_SELECTED,
	SERVICES_SELECTED,
	ACCOUNT_SELECTED
} from '../actions/Types'


const initalState = {
		tab: null
};

export default function(state = initalState, action){
	//console.log(action.type);
	//console.log(action.payload);
	switch(action.type){
	case USERS_SELECTED:
	case SHOPS_SELECTED:
	case SERVICES_SELECTED:
	case ACCOUNT_SELECTED:
		return {
		...state,
		tab: action.payload
	}



	default:
		return state;
	}
}
