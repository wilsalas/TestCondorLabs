const { AuthenticateJWT } = require("../resources/auth"),
    groupModel = require("../models/groups");

//It works to create new groups and add to the database
const NewGroup = (req, res) => AuthenticateJWT(req, res, async () => {
    try {
        //Check if a record with the same group name already exists
        if (await groupModel.countDocuments().where({ name: req.body.name }) < 1) {
            await new groupModel(req.body).save();
        }
        res.status(200).json({ status: 200, message: "new group created successfully" })
    } catch (error) {
        res.status(500).json({ status: 500, message: "An error has occurred try again please." });
    }
})

module.exports = {
    NewGroup
}