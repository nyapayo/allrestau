/*
** Allrestau app server 
** version 1.0.0
*/

const express = require('express'), cors = require('cors'), mysql = require('mysql'), socketIO = require('socket.io'), bodyParser = require('body-parser');

const app = express(), port = process.env.PORT || 4000, host = 'localhost';

const router = require('./router.js');

let devMode = true;

if (!devMode) {
	app.use(express.static('build'));
}

app.use(cors());
// For parse application/json
app.use(bodyParser.json());
// For parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// Router middleware
app.use(router);

app.use((req, res, next) => {
	let err = new Error('There is no path match '+ req.originalUrl);
	res.send(err.message);
});

app.listen(port, host, err => {
	if (!err) {
		console.log(`Server is running on http://${host}:${port}`);
	}
});
