import {
	USERS_SELECTED,
	SHOPS_SELECTED,
	SERVICES_SELECTED,
	ACCOUNT_SELECTED,
} from './Types';

export const setTab = tab=> (dispatch,getState)=>{

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

	}
	console.log(tab)
	if(tab==='Users')
	dispatch({
		type: USERS_SELECTED,
		payload: 'users'
	})
	else if(tab==='Shops')
		dispatch({
			type: SHOPS_SELECTED,
			payload: 'shops'
		})
	else if(tab==='Services')
		dispatch({
			type: SERVICES_SELECTED,
			payload: 'services'
		})
		else if(tab==='My Account')
		dispatch({
			type: ACCOUNT_SELECTED,
			payload: 'account'
		})

}
