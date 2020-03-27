import React from 'react';
import {Route} from 'react-router-dom';

const ProtectedRoute = ({component: Home, ...rest}) => {
	return (
		<Route {...rest} render={props => {
			if (true) {
				return <Home />
			} else {
				props.history.push('/login');
			}
		}} />
	);
}

export default ProtectedRoute;