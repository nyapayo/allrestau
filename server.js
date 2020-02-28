/*
** Allrestau app server 
** version 1.0.0
*/

const express = require('express');

const app = express(), port = process.env.PORT || 4000, host = 'localhost';

app.listen(port, host, err => {
	if (!err) {
		console.log(`Server is running on http://${host}:${port}`);
	}
});
