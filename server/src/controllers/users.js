const Auth = require("../resources/auth");

const RegisterUsers = (req, res) => Auth("register", req, res);
const LoginUsers = (req, res) => Auth('login', req, res);

module.exports = {
    RegisterUsers,
    LoginUsers
}