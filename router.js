const express = require('express');
const formidable = require('formidable');
const fs = require('fs');

const users = [];

const router = express.Router();

router.route('/').get((req, res, next) => {
	res.send('Nodejs realtime app');
});

router.post('/loginuser', (req, res) => {
	
	res.send('Login user');
});
router.post('/registeruser', (req, res) => {
	let form = new formidable.IncomingForm();

	form.parse(req, (err, fields, files) => {
		if (!err) {
			users.push(fields);
			console.log(users);
			res.json(fields);
		}
	})
});

module.exports = router;