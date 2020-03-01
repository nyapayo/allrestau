import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const ProtectedRoute = ({component: Home, ...rest}) => {
	return (
		<Route {...rest} render={
			(props) => {
				// Here i can check for session or local storage setting data before render Home component
				const userInSessionStorage = JSON.parse(window.sessionStorage.user);
				if ('name' in userInSessionStorage && 'email' in userInSessionStorage && 'password' in userInSessionStorage) {
					return <Home {...props} />
				} else {
					// redirect the user to login page
					return <Redirect to={{pathname: '/',state: {from: props.location}}} />
				}
			}
		} />
	)
}

export default ProtectedRoute;