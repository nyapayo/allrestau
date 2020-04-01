import React from 'react';
import {Route} from 'react-router-dom';
import localforage from 'localforage';

const ProtectedRoute = ({component: Home, ...rest}) => {
	return (
		<Route {...rest} render={props => {
			localforage.getItem('sessionLoginData').then(data => {
				if (true) {
					console.log(data)
					return <Home />
				} else {
					props.history.push('/login');
				}
			})
		}} />
	);
}

export default ProtectedRoute;