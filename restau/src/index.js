import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'w3-css';
import './index.css';
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import localforage from 'localforage';
import App from './components/App';

// Configuration de localforage
localforage.config({
	driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE, localforage.WEBSQL],
	// Rename database from 'localforage' to 'Allrestau restau'
	name: 'Allrestau restau'
});

ReactDOM.render(
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>
	,document.querySelector('#root'));

serviceWorker.register();
