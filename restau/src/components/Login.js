import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Login = (props) => {
	let fromTo;
	if (props.location.state) {
		fromTo = props.location.state.from.pathname;
	} else {
		fromTo = '/home';
	}
	console.log(fromTo)

	useEffect(() => {
		let form = document.forms.loginForm;
		form.addEventListener('submit', handleSubmit, false);
		function handleSubmit(e) {
			e.preventDefault();
			fetch('/loginuser', {
				method: 'post',
				body: new FormData(form),
				mode: 'cors'
			}).then(httpResp => {
				if (!httpResp.ok) {
					alert('Erreur de connexion au serveur');
					return;
				}
				return httpResp.json();
			}).then(currentUser => {
				// user correspondant ou erreur
				// set the session / local storage data
				// use props.history.replace(fromTo) if the user is found;
				window.sessionStorage.setItem('user', JSON.stringify(currentUser));
				props.history.replace(fromTo);
			});
		}
		return () => {
			form.removeEventListener('submit', handleSubmit, false);
		}
	});
	return (
		<div className='w3-content' style={{maxWidth: '500px'}}>
			<div className='w3-blue w3-container'>
				<h4>Login</h4>
			</div>
			<form method='post' autoComplete='false' encType='multipart/form-data' name='loginForm' noValidate>
				<div className='w3-section'>
					<label htmlFor='inputEmail'>Email:</label>
					<input type='text' name='email' className='w3-input w3-border' id='inputEmail' placeholder={'Email'} required/>
				</div>
				<div className='w3-section'>
					<label htmlFor='inputPassword'>password:</label>
					<input type='password' name='password' className='w3-input w3-border' id='inputPassword' placeholder={'Password'} required/>
				</div>
				<div className='w3-section'>
					<input type='submit' value='Login' name='loginButton' className='w3-btn w3-blue w3-ripple w3-block' />
				</div>
			</form>
			<div className='w3-center'><strong>OU</strong></div>
			<div className='w3-center'>
				<Link to={'/register'}>
					<button type='button' className='link'>Inscrivez-vous ici</button>
				</Link>
			</div> 
		</div>
	);
}

export default Login;