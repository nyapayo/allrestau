/*
** Allrestau app server 
** version 1.0.0
*/

const express = require('express');

const app = express(), port = process.env.PORT || 4000, host = 'localhost';

app.get('/', (req, res) => {
	res.send('Nodejs realtime app');
}).get('/data', (req, res) => {
	res.json([{name: 'siaka', age: 24, jeans: 'dior'}]);
}).listen(port, host, err => {
	if (!err) {
		console.log(`Server is running on http://${host}:${port}`);
	}
});
