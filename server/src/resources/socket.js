const groupModel = require("../models/groups"),
    messageModel = require("../models/messages");

module.exports = io => {
    // usernames which are currently connected to the chat
    var usersOnline = {};
    io.sockets.on('connection', socket => {
        // when the client emits 'newuser', this listens and executes
        socket.on("newuser", data => {
            // store the data in the socket session for this client
            socket.data = `${data.name}-${data.email}-${data.profile}`;
            socket.username = data.name;
            // store the group name in the socket session for this client
            socket.group = 'group1';
            // add the client's data to the global list
            usersOnline[socket.data] = socket.data;
            // send client to group1
            socket.join(socket.group);
            //send list user connected 
            io.sockets.emit('users', usersOnline);
            //send the group to the local chat
            socket.emit('updatelocalchat', SendGroupName(200, `you have connected to ${socket.group}`, socket.group));
            // echo to group 1 that a person has connected to their group
            socket.broadcast.to(socket.group).emit('updatechat',
                SendGroupName(409, `${socket.username} has connected to this group`, socket.group));
        })
        //bring the group list the first time
        GetGroup(io);
        //refresh group list
        socket.on("groupregister", () => GetGroup(io));
        //change group
        socket.on("switchgroup", newgroup => {
            //take the client out of the previous group
            socket.leave(socket.group);
            //enter the client to the new group
            socket.join(newgroup);
            //send the group to the local chat
            socket.emit('updatelocalchat',
                SendGroupName(200, `you have connected to ${newgroup}`, newgroup));
            //send a warning message to the previous group
            socket.broadcast.to(socket.group).emit('updatechat',
                SendGroupName(400, `${socket.username} has left this group`, socket.group));
            // update socket session group title
            socket.group = newgroup;
            //send a warning message to the new group
            socket.broadcast.to(socket.group).emit('updatechat', SendGroupName(409, `${socket.username} has joined this group`, socket.group));
        })

        //ask for messages and return the list of messages depending on the name of the group
        socket.on("askformessages", async groupname =>
            //issue messages only to those within the current group
            io.sockets.in(groupname).emit("loadmessages",
                await messageModel.find()
                    .where({ groupname })
                    .sort({ createdAt: -1 }))
        );

        // when the user disconnects.. perform this
        socket.on('disconnect', () => {
            // remove the username from global usernames list
            delete usersOnline[socket.data];
            // update list of users in chat, client-side
            io.sockets.emit('updateusers', usersOnline);
            // echo globally that this client has left
            socket.broadcast.emit('updatechat', SendGroupName(500, `${socket.username !== undefined ? socket.username : 'a user'} has disconnected`, socket.group));
            socket.leave(socket.room);
        });

    });

    //get the list of groups
    const GetGroup = async io => io.sockets.emit("getgroups", await groupModel.find())
    //update customer chat
    const SendGroupName = (status, message, group) => { return { status, message, group } }

}