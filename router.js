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
		
	});
});

router.post('/registerrestaurant', (req, res, next) => {

});

router.get('/getnumberrestaurant', (req, res, next) => {
	console.log('getnumberrestaurant');
	res.status(200).json({nb: 400});
});

module.exports = router;