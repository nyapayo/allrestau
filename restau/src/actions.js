export const LOGIN_EMAIL_CHANGE = 'LOGIN_EMAIL_CHANGE';

export const LOGIN_PASSWORD_CHANGE = 'LOGIN_PASSWORD_CHANGE';

export const LOGIN_RESTER_CONNECTE_CHANGE = 'LOGIN_RESTER_CONNECTE_CHANGE';

export const LOGIN_SHOW_PASSWORD = 'LOGIN_SHOW_PASSWORD';

export const FETCH_NUMBER_RESTAURANT_BEGIN = 'FETCH_NUMBER_RESTAURANT_BEGIN';

export const FETCH_NUMBER_RESTAURANT_SUCCESS = 'FETCH_NUMBER_RESTAURANT_SUCCESS';

export const FETCH_NUMBER_RESTAURANT_ERROR = 'FETCH_NUMBER_RESTAURANT_ERROR';

export function loginEmailChange(newValue) {
	return {
		type: LOGIN_EMAIL_CHANGE,
		newEmail: newValue
	}
}

export function loginPasswordChange(newValue) {
	return {
		type: LOGIN_PASSWORD_CHANGE,
		newPassword: newValue
	}
}

export function loginResterConnecteChange(isChecked) {
	return {
		type: LOGIN_RESTER_CONNECTE_CHANGE,
		checked: isChecked
	}
}

export function loginShowPassword() {
	return {
		type: LOGIN_SHOW_PASSWORD
	}
}

export function fetchNumberRestaurantBegin() {
	return {
		type: FETCH_NUMBER_RESTAURANT_BEGIN
	}
}

export function fetchNumberRestaurantSuccess(nb) {
	return {
		type: FETCH_NUMBER_RESTAURANT_SUCCESS,
		newNumber: nb
	}
}

export function fetchNumberRestaurantError(error) {
	return {
		type: FETCH_NUMBER_RESTAURANT_ERROR,
		newError: error
	}
}

export function getNumberRestaurant() {
	return dispatch => {
		dispatch(fetchNumberRestaurantBegin());
		return fetch('/getnumberrestaurant').then(httpResp => {
			return httpResp.json();
		}).then(jsonData => {
			dispatch(fetchNumberRestaurantSuccess(jsonData.nb));
		}).catch(err => {
			dispatch(fetchNumberRestaurantError(err));
		});
	}
}