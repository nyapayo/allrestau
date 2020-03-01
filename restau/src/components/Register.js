import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

const Register = props => {
	useEffect(() => {
		const form = document.forms.registerForm;
		form.addEventListener('submit', handleRegister, false);
		function handleRegister(e) {
			e.preventDefault();
			fetch('/registeruser', {
				method: 'POST',
				body: new FormData(form)
			}).then(httpResp => {
				if (!httpResp.ok) {
					alert('Sorry! could not connect to the server.');
					return;
				}
				return httpResp.json();
			}).then(currentUser => {
				// user correspondant
				// set the session / local storage data
				// use props.history.replace('/home') to redirect user to home;
				window.sessionStorage.user = JSON.stringify(currentUser);
				props.history.replace('/home');
			});
		}
		return () => {
			form.removeEventListener('submit', handleRegister, false);
		}
	});
	return (
		<div className='w3-content' style={{maxWidth: '500px'}}>
			<div className='w3-blue w3-container'>
				<h4>Register</h4>
			</div>
			<form method='post' autoComplete='false' encType='multipart/form-data' name='registerForm' id='regForm' noValidate>
				<div className='w3-section'>
					<label htmlFor='inputName'>Nom:</label>
					<input type='text' name='name' className='w3-input w3-border' id='inputName' placeholder={'Nom'} required />
				</div>
				<div className='w3-section'>
					<label htmlFor='inputEmail'>Email:</label>
					<input type='email' name='email' className='w3-input w3-border' id='inputEmail' placeholder={'Email'} required/>
				</div>
				<div className='w3-section'>
					<label htmlFor='inputPassword'>password:</label>
					<input type='password' name='password' className='w3-input w3-border' id='inputPassword' placeholder={'Password'} required/>
				</div>
				<div className='w3-section'>
					<input type='submit' value='Register' name='registerButton' className='w3-btn w3-blue w3-ripple w3-block' />
				</div>
			</form>	
			<div className='w3-center'><strong>OU</strong></div>
			<div className='w3-center'>
				<Link to={'/'}>
					<button type='button' className='link'>Connectez-vous ici</button>
				</Link>
			</div> 
		</div>
	);
}

export default Register;