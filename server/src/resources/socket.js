module.exports = io => {

    // usernames which are currently connected to the chat
    var usersOnline = {};
    io.sockets.on('connection', socket => {
        // when the client emits 'adduser', this listens and executes
        socket.on("newuser", username => {
            // store the username in the socket session for this client
            socket.username = username;
            // store the room name in the socket session for this client
            socket.room = 'channel1';
            // add the client's username to the global list
            usersOnline[username] = username;
            // send client to channel1 1
            socket.join(socket.room);
            //send list user connected 
            socket.emit('listusers', username);
            // echo to client they've connected
            socket.emit('updatechat', 'SERVER', 'you have connected to room1');
        })
    });

}