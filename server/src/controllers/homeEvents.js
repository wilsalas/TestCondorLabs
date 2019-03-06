const { AuthenticateJWT } = require("../resources/auth"),
    groupModel = require("../models/groups"),
    messageModel = require("../models/messages");

//It works to create new groups and add to the database
const NewGroup = (req, res) => AuthenticateJWT(req, res, async () => {
    try {
        //Check if a record with the same group name already exists
        if (await groupModel.countDocuments().where({ name: req.body.name }) < 1 && req.body.name !== "group1") {
            await new groupModel(req.body).save();
            res.status(200).json({ status: 200, message: "New group created successfully" })
        } else {
            res.status(409).json({
                status: 409,
                message: "This group already exists"
            })
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: "An error has occurred try again please." });
    }
});

const NewMessage = (req, res) => AuthenticateJWT(req, res, async () => {
    try {
        await new messageModel(req.body).save();
        res.status(200).json({ status: 200, message: "New message created successfully" })
    } catch (error) {
        res.status(500).json({ status: 500, message: "An error has occurred try again please." });
    }
});

module.exports = {
    NewGroup,
    NewMessage
}