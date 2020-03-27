const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 4000, host = 'localhost';
const router = require('./router');

// install helmet middleware

const devMode = true;

app.use(router);
// Gestion des reponses 404
app.use((req, res, next) => {
	res.set('content-type', 'text/html');
	res.status(404).send('<h3>Sorry can not find that</h3>'+'<p style="color: red">'+req.originalUrl+'</p>');
});

// Gestion des erreurs
// logError
app.use((err, req, res, next) => {
	console.error(err.stack); next(err);
});
// clientErrorHandler 
app.use((err, req, res, next) => {
	if (req.xhr) {
		res.status(500).json({ error: 'Something failed!' });
	} else {
		next(err);
	}
});
// error handler
app.use((err, req, res, next) => {
	res.status(500).json({error: err});
});

if (!devMode) {
	// point to restau app after run 'npm run build'
	// express will serve our static files
	app.use(express.static(__dirname+'restau/build'));
}

// Listen for socket connesxion
io.on('connection', socket => {
	console.log('New user connected');

	socket.on('disconnect', () => {
		console.log('User disconnected!');
	});

});

server.listen(PORT, err => {
	if (!err) {
		console.log(`Server is running on http://${host}:${PORT}`);
	}
});

