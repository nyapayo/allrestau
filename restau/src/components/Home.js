import React, {useEffect} from 'react';

const Home = props => {
	useEffect(() => {
		const logoutButton = document.querySelector('#logoutButton');
		logoutButton.addEventListener('click', handleLogout, false);
		function handleLogout(e) {
			if (window.sessionStorage.user) {
				window.sessionStorage.clear();
				props.history.replace('/');
			}
		}
		return () => {
			logoutButton.removeEventListener('click', handleLogout, false);
		}
	});
	return (
		<div>
			<p>Welcome Home Component</p>
			<button type='button' className='w3-btn w3-red w3-ripple' id='logoutButton'>Logout</button>
		</div>
	)
}

export default Home;