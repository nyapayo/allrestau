export const LOGIN_EMAIL_CHANGE = 'LOGIN_EMAIL_CHANGE';

export const LOGIN_PASSWORD_CHANGE = 'LOGIN_PASSWORD_CHANGE';

export const LOGIN_RESTER_CONNECTE_CHANGE = 'LOGIN_RESTER_CONNECTE_CHANGE';

export const LOGIN_SHOW_PASSWORD = 'LOGIN_SHOW_PASSWORD';

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