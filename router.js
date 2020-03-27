const express = require('express');
const mysql = require('mysql');

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

router.post('/login', (req, res, next) => {
	console.log('User Login');
	res.status(200).json({name: 'siaka'});
});

module.exports = router;