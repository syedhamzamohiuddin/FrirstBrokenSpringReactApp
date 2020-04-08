import {combineReducers} from 'redux';
import auth from './auth';
import users from './users';
import choosenTab from './chosenTab';
import user from './User';
export default combineReducers({
	auth,
	users,
	choosenTab,
	user
}); 