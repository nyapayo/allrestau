const users = [];

const addUser = ({id, name, room}) => {
	name = name.trim().toLowerCase();
	room = room.trim().toLowerCase();

	const existingUser = users.find(user => user.name === name && user.room === room);

	if (existingUser) {
		return {error: 'username already taken'};
	}

	let user = {id, name, room};
	users.push(user);

	return {user};
}

const removeUser = id => {
	const index = users.findIndex(user => user.id === id);
	if (index) {
		return users.splice(index, 1)[0];
	}
}

const getUser = id => users.find(user => user.id === id);

const getUsersInRoom = (room) => {
	return users.filter(user => user.room === room);
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom };