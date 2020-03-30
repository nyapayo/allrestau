import React, { useEffect, useState } from 'react';
import './LoginForm.css';
import {Link} from 'react-router-dom';
import MaterialIcon from 'material-icons-react';
import { connect } from 'react-redux';
import { loginEmailChange, loginPasswordChange, loginResterConnecteChange, loginShowPassword } from '../../actions.js';
import $ from 'jquery';

const LoginForm = (props) => {
	useEffect(() => {

		let loginInputs = [$('#loginEmailInput'), $('#loginPasswordInput')];

		let loginForm = $('#loginForm');

		loginForm.on('submit', e => {
			e.preventDefault();
			console.log('Submit form');
		});

		return () => {

		}
	});
	return (
		<div className='loginForm loginForm-shadow'>
			<form action='' encType='multipart/form-data' method='post' name='loginForm' id='loginForm' className='w3-container' autoComplete='off'>
				<div className='w3-section'>
					<h2 className='w3-text-blue'>Connexion</h2>
				</div>
				<div className='w3-section'>
					<label htmlFor='loginEmailInput' className='input-label'>Email</label>
					<input 
						type='email' 
						name='email' 
						value={props.email} 
						onChange={e => {props.loginEmailChange(e.target.value)}} 
						className='w3-input w3-border' 
						id='loginEmailInput' 
						placeholder='Email' 
						required 
					/>
					<span className='w3-small w3-text-red error'></span>
				</div>
				<div className='w3-section'> 
					<label htmlFor='loginPasswordInput' className='input-label'>Password</label>
					<input 
						type='password' 
						name='password' 
						value={props.password} 
						onChange={e => {props.loginPasswordChange(e.target.value)}} 
						className='w3-input w3-border' 
						id='loginPasswordInput' 
						placeholder='Password' 
						required 
					/>
					<span className='w3-small w3-text-red error'></span>
				</div>
				<div className='w3-section'>
					<input 
						type='checkbox' 
						name='showPassword' 
						checked={props.showPassword} 
						onChange={e => {
							let loginPasswordInput = document.querySelector('#loginPasswordInput');
							if (loginPasswordInput.type === 'password') loginPasswordInput.type = 'text'
							else loginPasswordInput.type = 'password'
							props.loginShowPassword();
						}} 
						className='w3-check' 
						id='showLoginPassword' 
					/>
					<label htmlFor='showLoginPassword'> Afficher le mot de passe</label>
				</div>
				<div className='w3-section'>
					<input 
						type='checkbox' 
						name='resterConnecte' 
						value='resterConnecte'
						checked={props.resterConnecte} 
						onChange={e => {props.loginResterConnecteChange(e.target.checked)}} 
						className='w3-check' 
						id='loginConnected' 
					/>
					<label htmlFor='loginConnected'> Rester connecté</label>
				</div>
				<div className='w3-section'>
					<button type='submit' className='w3-button w3-blue w3-hover-blue w3-hover-opacity w3-ripple w3-block'>Connexion</button>
				</div>
				<div className='w3-section'>
					<Link to={'/forgotpassword'}>Mot de passe oublié?</Link>
				</div>
				<div className='w3-section'>
					<Link to={'/register'} className='w3-text-blue'>
						Créer un compte
					</Link> 
					<span> et faites croitre votre chiffre d'affaire.</span>
				</div>
			</form>
			
		</div>
	);
}

const mapStateToProps = state => (
	{
		email: state.login.email,
		password: state.login.password,
		resterConnecte: state.login.resterConnecte,
		showPassword: state.login.showPassword
	}
);

const mapDispatchToProps = {
	loginEmailChange, 
	loginPasswordChange, 
	loginResterConnecteChange,
	loginShowPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);