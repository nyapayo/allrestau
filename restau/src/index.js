import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'w3-css';
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
	,document.getElementById('root'));

serviceWorker.register();
