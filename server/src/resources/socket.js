module.exports = io => {
    io.on("connection", socket => {
        console.log(`Conectado a Socket.io`);

        // socket.on("info-message", data => {
        //     socket.broadcast.emit('info-message', data);
        // })

        // socket.on("chat-message", data => {
        //     io.emit('chat-message', data);
        // })


        socket.on("disconnect", () => {
            console.log("Usuario desconectado de Socket.io");
        });
    });
}