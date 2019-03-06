const express = require("express"),
    app = express(),
    cors = require("cors"),
    morgan = require("morgan"),
    http = require("http").Server(app),
    io = require("socket.io")(http),
    path = require("path");

//settings
require("dotenv").config()
require("./config/db");


//middlewares
require("./resources/auth");
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes and resources
require("./resources/socket")(io);
app.use(require("./routes/routes"));

//deploy to server
if (process.env.NODE_ENV === "production") {
    let pathClient = "../client/build";
    // Serve any static files 
    app.use(express.static(path.join(__dirname, pathClient)));
    // Handle React routing, return all requests to React app
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, pathClient, "index.html"));
    });
}

//start server
http.listen(process.env.PORT, () => console.log(`Server on port ${process.env.PORT}`));