const users =[];

const usersInRoom = new Map();

const addUser = ({ id, name }) => {
    // JavaScript Mastery = javascriptmastery
    name = name.trim().toLowerCase();
    
    if (existingUser) {
        return { error: 'Username is taken' };
    }

    const user = { id, name };

    users.push(user);

    return { user };
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id);
}

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room);
}

const makeRoom = ({ user1, user2 }) => {

    // check if users already have a room
    const checkExistingRoom = [...usersInRoom.entries()].find(([key, value]) => 
        key.includes(user1) && key.includes(user2)
    );

    if (checkExistingRoom) {
        return {error: `Both user have assign room: ${checkExistingRoom[1]}$`};
    }

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let roomId = '';

    for (let i = 0; i < 27; i++) {
        const index = Math.floor(Math.random() * characters.length);
        roomId += characters[index];
    }

    const createRoom = [user1, user2].sort().join("-");
    usersInRoom.set(createRoom, roomId);

    return roomId;
}

export { addUser, removeUser, getUser, getUsersInRoom, makeRoom };