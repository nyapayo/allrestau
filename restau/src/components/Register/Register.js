import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = props => {
	return (
		<div className='registerForm form-shadow'>
			<form action='' method='post' encType='multipart/form-data' name='registerForm' className='w3-container' autoComplete='off'>
				<div className='w3-section'>
					<h2 className='w3-text-blue'>Connexion</h2>
				</div>
				<Link to={'/'} className='w3-text-blue'>connexion</Link>
			</form>
		</div>
	);
}

export default Register