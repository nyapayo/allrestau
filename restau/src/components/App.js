import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import ProtectedRoute from './Protected.route';

const App = (props) => {
	return (
		<div className=''>
			<header className='header'>
				<h3>Online Agenda App</h3>
				<p>Gerez votre agenda en un clic <span role='img' aria-label='point finger' style={{fontSize: '20px'}}>&#128070;&#127997;</span></p>
			</header>
			<div className='section w3-padding'>
				<Switch>
					<Route path={'/'} exact render={(props) => <Login {...props} />} />
					<Route path={'/register'} render={(props) => <Register {...props} />} />
					<ProtectedRoute component={Home} path={'/home'} />
					<Route path='*' render={(props) => <div>404 Not Found</div>} />
				</Switch>
			</div>
		</div>
	)
}

export default App;
