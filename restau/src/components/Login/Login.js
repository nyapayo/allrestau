import React, { useEffect } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import MaterialIcon from 'material-icons-react';
import { connect } from 'react-redux';
import { loginEmailChange, loginPasswordChange, loginResterConnecteChange, loginShowPassword } from '../../actions.js';
import $ from 'jquery';
import localforage from 'localforage';
import sha256 from '../../sha256';

const Login = props => {

	async function loginRestaurant(url) {
		try {
			const httpResp = await fetch(url, { method: 'post', body: new FormData(document.forms.loginForm)});
			return await httpResp.json();
		} catch(err) {
			console.log('Erreur connexion au serveur', err);
		}
	}

	// Where to redirect after user success login
	let fromTo;
	if (props.location.state) {
		fromTo = props.location.state.pathname;
	} else {
		fromTo = '/home';
	}

	useEffect(() => {

		let loginForm = document.forms.loginForm, loginButton = document.querySelector('#loginButton');

		let loginEmailInput = document.querySelector('#loginEmailInput'), loginPasswordInput = document.querySelector('#loginPasswordInput');

		loginForm.onsubmit = e => {

			e.preventDefault();

			if (!loginEmailInput.validity.valid) {
				loginEmailInput.nextElementSibling.textContent = 'Email invalide.';
				if (!loginEmailInput.classList.contains('w3-border-red')) {
					loginEmailInput.classList.add('w3-border-red');
				}
				return;
			}
			if (!loginPasswordInput.validity.valid) {
				loginPasswordInput.nextElementSibling.textContent = 'Mot de passe requis.';
				if (!loginPasswordInput.classList.contains('w3-border-red')) {
					loginPasswordInput.classList.add('w3-border-red');
				}
				return;
			}

			// Email and password are correct in front side

			let errorString = {
				EMAIL_EMPTY: 'Email empty',
				PASSWORD_EMPTY: 'Password empty',
				BAD_EMAIL_OR_PASSWORD: 'Bad email or password'
			}
			
			loginRestaurant('/loginrestaurant').then(userData => {
				if (userData) {
					const {emailEmpty, passwordEmpty, error} = userData;
					if (emailEmpty) {
						throw new Error(errorString.EMAIL_EMPTY);
					}
					if (passwordEmpty) {
						throw new Error(errorString.PASSWORD_EMPTY);
					}
					if (error) {
						throw new Error(errorString.BAD_EMAIL_OR_PASSWORD);
					}

					// All user data are in userData
					console.log(userData)

				}
			}).catch(err => {
				switch(err.message) {
					case errorString.EMAIL_EMPTY:
						console.log('email empty');
					break;
					case errorString.PASSWORD_EMPTY:
						console.log('password empty');
					break;
					case errorString.BAD_EMAIL_OR_PASSWORD:
						console.log('Bad email or password');
					break;
					default:
				}
			});

		}

		loginForm.onkeyup = e => {
			if (e.key === 'Enter') {
				// Want to submit
				// check all inputs
				if (!loginEmailInput.value) {
					loginEmailInput.nextElementSibling.textContent = 'Email requis.';
					if (!loginEmailInput.classList.contains('w3-border-red')) {
						loginEmailInput.classList.add('w3-border-red');
					}
				}
				if (!loginPasswordInput.value) {
					loginPasswordInput.nextElementSibling.textContent = 'Mot de passe requis.';
					if (!loginPasswordInput.classList.contains('w3-border-red')) {
						loginPasswordInput.classList.add('w3-border-red');
					}
				}
				/*if (!loginEmailInput.checkValidity()) {
					loginEmailInput.nextElementSibling.textContent = 'Email invalide.';
					if (!loginEmailInput.classList.contains('w3-border-red')) {
						loginEmailInput.classList.add('w3-border-red');
					}
				}*/
			}
		}

		loginButton.onclick = e => {
			if (!loginEmailInput.value) {
				loginEmailInput.nextElementSibling.textContent = 'Email requis.';
				if (!loginEmailInput.classList.contains('w3-border-red')) {
					loginEmailInput.classList.add('w3-border-red');
				}
			}
			if (!loginPasswordInput.value) {
				loginPasswordInput.nextElementSibling.textContent = 'Mot de passe requis.';
				if (!loginPasswordInput.classList.contains('w3-border-red')) {
					loginPasswordInput.classList.add('w3-border-red');
				}
			}
			/*if (!loginEmailInput.checkValidity()) {
				loginEmailInput.nextElementSibling.textContent = 'Email invalide.';
				if (!loginEmailInput.classList.contains('w3-border-red')) {
					loginEmailInput.classList.add('w3-border-red');
				}
			}*/
		}

		let loginInputs = [$('#loginEmailInput'), $('#loginPasswordInput')];

		function handleLoginFocus(e) {
			e.target.placeholder = '';
		}

		function handleLoginBlur(e) {
			if (!e.target.value) {
				// Login email input blur
				if (e.target.name === 'email') {
					e.target.nextElementSibling.textContent = 'Email requis.';
					if (!e.target.classList.contains('w3-border-red')) {
						e.target.classList.add('w3-border-red');
					}
				}
				// Login password input blur
				if (e.target.name === 'password') {
					e.target.nextElementSibling.textContent = 'Mot de passe requis.';
					if (!e.target.classList.contains('w3-border-red')) {
						e.target.classList.add('w3-border-red');
					}
				}
			} else {
				e.target.nextElementSibling.textContent = '';
				if (e.target.classList.contains('w3-border-red')) {
					e.target.classList.remove('w3-border-red');
				}
			}

			// Gestion placeholder
			if (e.target.name === 'email') {
				e.target.placeholder = 'Email';
			}
			if (e.target.name === 'password') {
				e.target.placeholder = 'Password';
			}
		}

		function handleLoginInput(e) {
			if (e.target.value) {
				e.target.nextElementSibling.textContent = '';
				if (e.target.classList.contains('w3-border-red')) {
					e.target.classList.remove('w3-border-red');
				}
			} else {
				if (e.target.name === 'email') {
					e.target.nextElementSibling.textContent = 'Email requis.';
					if (!e.target.classList.contains('w3-border-red')) {
						e.target.classList.add('w3-border-red');
					}
				}
				if (e.target.name === 'password') {
					e.target.nextElementSibling.textContent = 'Mot de passe requis.';
					if (!e.target.classList.contains('w3-border-red')) {
						e.target.classList.add('w3-border-red');
					}
				}
			}
		}

		for(let input of loginInputs) {
			input.on({
				'input': handleLoginInput,
				'focus': handleLoginFocus,
				'blur': handleLoginBlur
			});
		}

		return () => {
			for(let input of loginInputs) {
				input.off('input', handleLoginInput);
				input.off('focus', handleLoginFocus);
				input.off('blur', handleLoginBlur)
			}
		}
	});
	
	if (true) {
		return (
			<div className='loginForm form-shadow'>
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
							autoComplete='on'
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
							maxLength={30}
							required 
						/>
						<span className='w3-small w3-text-red error'></span> <br />
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
						<input type='submit' name='login' value='Connexion' className='w3-button w3-blue w3-hover-blue w3-hover-opacity w3-ripple w3-block' id='loginButton' />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);