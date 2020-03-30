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
	console.log('connected');
	// Make query here!
	
});

router.post('/login_restaurant', (req, res, next) => {
	let form = new formidable.IncomingForm();

	form.parse(req, (err, fields, files) => {

	});
});

router.post('/register_restaurant', (req, res, next) => {

});

module.exports = router;