import React, { useEffect } from 'react';
import Header from '../Header/Header';
import AppInfo from '../AppInfo/AppInfo';
import './LoginRegister';
import { Redirect } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';

const LoginRegister = props => {
	useEffect(() => {
		console.log(props)
		return () => {

		}
	});

	if (false) {
		// First check for stay logged in
		// by data set in sessionStorage
		return <Redirect to={
			{
				pathname: '/home',
				state: props.location
			}
	} />
	} else {
		return (
			<div>
				<Header {...props} />
				<div className='w3-content main' style={{maxWidth: '1200px'}} >
					<div className='w3-row'>
						<div className='w3-col l4 m5 s12 w3-container'>
							{
								props.location.pathname === '/'?
								<Login {...props} />:
								<Register {...props} />
							}
						</div>
						<div className='w3-col l8 m7 s12 w3-container'>
							<AppInfo />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginRegister;