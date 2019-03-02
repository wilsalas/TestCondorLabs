const { AuthenticateUser, AuthenticateJWT } = require("../resources/auth");

const RegisterUsers = (req, res) => AuthenticateUser("register", req, res);
const LoginUsers = (req, res) => AuthenticateUser('login', req, res);
const GetDataUsers = (req, res) => AuthenticateJWT(req, res, async data => res.status(data.status).json(data));

module.exports = {
    GetDataUsers,
    RegisterUsers,
    LoginUsers
}

