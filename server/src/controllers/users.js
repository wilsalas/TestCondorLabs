const { AuthenticateUser, AuthenticateJWT } = require("../resources/auth"),
    userModel = require("../models/users");

const RegisterUsers = (req, res) => AuthenticateUser("register", req, res);
const LoginUsers = (req, res) => AuthenticateUser('login', req, res);
const UpdateUsers = (req, res) => AuthenticateJWT(req, res, async data => {
    try {
        if (req.body.password !== "") {
            req.body.password = new userModel().encryptPassword(req.body.password);
        } else {
            delete req.body.password;
        }
        await userModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
        res.status(200).json({ status: 200, response: "Successfully updated user data" })
    } catch (error) {
        res.status(500).json({ status: 500, response: error });
    }
});
const GetDataUsers = (req, res) => AuthenticateJWT(req, res, async data => res.status(data.status).json(data));

module.exports = {
    GetDataUsers,
    RegisterUsers,
    LoginUsers,
    UpdateUsers
}

