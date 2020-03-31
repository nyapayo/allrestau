import { 
	LOGIN_EMAIL_CHANGE, 
	LOGIN_PASSWORD_CHANGE, 
	LOGIN_RESTER_CONNECTE_CHANGE, 
	LOGIN_SHOW_PASSWORD,
	FETCH_NUMBER_RESTAURANT_BEGIN,
	FETCH_NUMBER_RESTAURANT_SUCCESS,
	FETCH_NUMBER_RESTAURANT_ERROR 
} from './actions';

const initialState = {
	login: {
		email: '',
		password: '',
		resterConnecte: true,
		showPassword: false,
		error: '' // server error
	},
	nbRestau: ''
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

  	case FETCH_NUMBER_RESTAURANT_BEGIN:
  		return {
  			...state,
  			nbRestau: 5
  		}

  	case FETCH_NUMBER_RESTAURANT_SUCCESS:
  		return {
  			...state,
  			nbRestau: 100
  		}

  	case FETCH_NUMBER_RESTAURANT_ERROR:
  		return {
  			...state,
  			nbRestau: 0
  		}

  	default:
  		return state;
  }
}

export default reducer;