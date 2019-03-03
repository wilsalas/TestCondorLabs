module.exports = io => {

    // usernames which are currently connected to the chat
    var usersOnline = {};
    io.sockets.on('connection', socket => {
        // when the client emits 'adduser', this listens and executes
        socket.on("newuser", username => {
            // store the username in the socket session for this client
            socket.username = username.name;
            // store the room name in the socket session for this client
            socket.room = 'group1';
            // add the client's username to the global list
            usersOnline[username.name] = username.email;
            // send client to channel1 1
            socket.join(socket.room);
            //send list user connected 
            io.sockets.emit('listusers', usersOnline, username.email);
            // echo to client they've connected
            socket.emit('updatechat', 'SERVER', 'you have connected to room1');
        })

        // when the user disconnects.. perform this
        socket.on('disconnect', function () {
            // remove the username from global usernames list
            delete usersOnline[socket.username];
            // update list of users in chat, client-side
            io.sockets.emit('updateusers', usersOnline);
        });

    });



}