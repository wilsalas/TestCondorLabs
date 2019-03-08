const { AuthenticateJWT } = require("../resources/auth"),
    groupModel = require("../models/groups"),
    messageModel = require("../models/messages");

//It works to create new groups and add to the database
const NewGroup = (req, res) => AuthenticateJWT(req, res, async () => {
    try {
        /* function to verify a new public group
            and compare if there is no record with the name of the group sent 
        */
        if (req.body.name !== "group1" && req.body.type === "All") {
            if (await groupModel.countDocuments().where({ name: req.body.name }) < 1) {
                await new groupModel(req.body).save();
                res.json({
                    status: 409,
                    message: "New group created successfully",
                    groupname: req.body.name
                });
            } else {
                res.json({
                    status: 409,
                    message: "This group already exists"
                })
            }
            /* condition to verify if there is a private group or not, and if it exists, 
            assign the client to that group if there is no private group 
             */
        } else if (req.body.name !== "group1" && req.body.type === "Private") {
            let group = await groupModel.findOne({
                "$or": [
                    {
                        "name": `${req.body.relationship.user1}-${req.body.relationship.user2}`
                    }, {
                        "name": `${req.body.relationship.user2}-${req.body.relationship.user1}`
                    }]
            });
            if (group !== null) {
                res.json({ groupname: group.name })
            } else {
                await new groupModel(req.body).save();
                res.json({
                    status: 409,
                    message: "New group private created successfully",
                    groupname: req.body.name
                });
            }
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: "An error has occurred try again please." + error });
    }
});

/* function to create a message */
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