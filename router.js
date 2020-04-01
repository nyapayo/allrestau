const express = require('express');
const mysql = require('mysql');
const formidable = require('formidable');

const router = express.Router();

let con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'allrestau'
});

con.connect(err => {
	if (err) {
		throw new Error(err);
	}
	console.log('connected to database!');
	// Make query here!
	
});

router.get('/', (req, res, next) => {
	console.log('Server root');
	res.end();
});

router.post('/loginrestaurant', (req, res, next) => {
	let form = new formidable.IncomingForm();

	form.parse(req, (err, fields, files) => {
		if (!err) {
			const {email, password} = fields;

			// Check if email is empty
			if (!email) {
				res.status(200).json({email, password, emailEmpty: 'Email empty'});
			}
			// check if password is empty
			if (!password) {
				res.status(200).json({email, password, passwordEmpty: 'Password empty'});
			}

			// Every thing is good
			// Then check for user
			if (true) {
				// return all user data
				res.status(200).json({id: 5, email, password, phone: '+237676615300', name: 'Saveur Africaine'});
			} else {
				res.status(200).json({email, password, error: 'Bad email or password'});
			}
		}

	});
});

router.post('/registerrestaurant', (req, res, next) => {

});

router.get('/getnumberrestaurant', (req, res, next) => {
	console.log('getnumberrestaurant');
	res.status(200).json({nb: 400});
});

module.exports = router;