import React from 'react';
import Header from '../Header/Header';
import './Login.css';
import LoginForm from './LoginForm';
import AppInfo from '../AppInfo/AppInfo';
import {Redirect, Link} from 'react-router-dom';

const Login = props => {
	// First check for stay logged in
	// by data set in sessionStorage
	if (false) {
		return (
			<Redirect to={
				{
					pathname: '/register',
					state: props.location
				}
			} />
		);
	} else {
		return (
			<div>
				<Header {...props} />
				<div className='main w3-content' style={{maxWidth: '1200px'}} >
					<div className='login'>
						<div className='w3-row'>
							<div className='w3-col l4 m5 s12 w3-container'>
								<LoginForm />
							</div>
							<div className='w3-col l8 m7 s12 w3-container'>
								<div style={{marginTop: '7%'}}>
									<AppInfo />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
