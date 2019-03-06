const { AuthenticateUser, AuthenticateJWT } = require("../resources/auth"),
userModel = require("../models/users");

const RegisterUsers = (req, res) => AuthenticateUser("register", req, res);
const LoginUsers = (req, res) => AuthenticateUser('login', req, res);
const UpdateUsers = (req, res) => AuthenticateJWT(req, res, async data => {
    res.json({ id: req.params.id, data: req.body});
});
const GetDataUsers = (req, res) => AuthenticateJWT(req, res, async data => res.status(data.status).json(data));

module.exports = {
    GetDataUsers,
    RegisterUsers,
    LoginUsers,
    UpdateUsers
}

