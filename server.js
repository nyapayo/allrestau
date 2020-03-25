const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 4000, host = 'localhost';
const router = require('./router');

const {addUser, getUser, removeUser, getUsersInRooms} = require('./users');

// install helmet middleware

const devMode = true;

app.use(router);
app.use((req, res, next) => {
	req.time = new Date();
	// pass control to the next middleware
	next();
});
// Gestion des reponses 404
app.use((req, res, next) => {
	res.status(404).send('<h3>Sorry can not find that</h3>'+req.originalUrl);
});

// Gestion des erreurs

// logError
app.use((err, req, res, next) => {
	console.error(err.stack);
	next(err);
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
	res.status(500);
	res.json({error: err});
});

if (!devMode) {
	// point to restau app after run 'npm run build'
	// express will serve our static files
	app.use(express.static(__dirname+'restau/build'));
}

// Listen for socket connesxion
io.on('connection', socket => {
	console.log('New user connected');

	socket.on('join', ({name, room}, callback) => {

		const {error, user} = addUser({id: socket.id, name, room});

		if (error) { return callback(error) }

		console.log(user);

		// Emit a message to the user that join a specific room on the app
		socket.emit('message', { user: 'admin', text: `${user.name} welcome to room ${user.room}` });
		// Emit a message to all others users in a room that a user join them in that room except the user that join
		socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} as joined!` });

		// Add a user in a room
		socket.join(user.room);

	});

	// Listen to user send message in a room
	socket.on('sendMessage', (message, callback) => {
		const user = getUser(socket.id);

		console.log(message+' from'+ user.name);

		// Emit a message to all users in a room include the sender
		io.to(user.room).emit('message', {user: user.name, text: message});

		callback();
	})

	socket.on('disconnect', () => {
		console.log('User disconnected!');
	});

});

server.listen(PORT, err => {
	if (!err) {
		console.log(`Server is running on http://${host}:${PORT}`);
	}
})

