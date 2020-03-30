import { LOGIN_EMAIL_CHANGE, LOGIN_PASSWORD_CHANGE, LOGIN_RESTER_CONNECTE_CHANGE, LOGIN_SHOW_PASSWORD } from './actions';

const initialState = {
	login: {
		email: '',
		password: '',
		resterConnecte: true,
		showPassword: false,
		isLoggin: false, // While trying to login
		error: '' // server error
	}
}

const reducer = (state=initialState, action) => {

  switch(action.type) {

  	case LOGIN_EMAIL_CHANGE:
  		return {
  			...state,
  			login: {
  				...state.login,
  				email: action.newEmail
  			}
  		}

  	case LOGIN_PASSWORD_CHANGE:
  		return {
  			...state,
  			login: {
  				...state.login,
  				password: action.newPassword
  			}
  		}

  	case LOGIN_RESTER_CONNECTE_CHANGE:
  	  return {
  	  	...state,
  	  	login: {
  	  		...state.login,
  	  		resterConnecte: action.checked
  	  	}
  	  }

  	 case LOGIN_SHOW_PASSWORD:
  	 	return {
  	 		...state,
  	 		login: {
  	 			...state.login,
  	 			showPassword: !state.login.showPassword
  	 		}
  	 	}

  	default:
  		return state;
  }
}

export default reducer;