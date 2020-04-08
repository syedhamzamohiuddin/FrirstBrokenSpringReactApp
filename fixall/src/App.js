import React from 'react';
import './app.css';
import Landing from './pages/landing/components/Landing.js';
import Service from './pages/services/components/Service.js';
import Admin from './pages/admin';

import Register from './accounts/Register'
import Login from './accounts/Login'
import PrivateRoute from './common/PrivateRoute'
import {HashRouter as Router, Route ,Switch,Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

class App extends React.Component
{
	
	
	render(){
		return(
				<Provider store={store} >
				
				<Router>
				<Switch>
				<Route exact path="/" component={Landing}></Route>
				<PrivateRoute exact path="/service" component={Service}></PrivateRoute>
				<PrivateRoute exact path="/admin" component={Admin}></PrivateRoute>

				<Route exact path="/register" component={Register}></Route>
				<Route exact path="/login" component={Login}></Route>
			</Switch>
				
				</Router>
				</Provider>
			
			
				
			
			
		);
	}
	

}

export default App;