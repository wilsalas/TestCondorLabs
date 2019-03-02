module.exports = io => {
    io.on("connection", socket => {
        console.log(`Conectado a Socket.io`);

        socket.emit('news', { hello: 'world' });
        socket.on('my other event', function (data) {
          console.log(data);
        });

        socket.on("disconnect", () => {
            console.log("Usuario desconectado de Socket.io");
        });
    });
}