const { AuthenticateJWT } = require("../resources/auth"),
    groupModel = require("../models/groups");

//It works to create new groups and add to the database
const NewGroup = (req, res) => AuthenticateJWT(req, res, async () => {
    try {
        let newGroup = new groupModel;
        newGroup.name = req.body.namegroup;
        await newGroup.save();
        res.status(200).json({ status: 200, message: "new group created successfully" })
    } catch (error) {
        res.status(500).json({ status: 500, message: "An error has occurred try again please." });
    }
})

module.exports = {
    NewGroup
}