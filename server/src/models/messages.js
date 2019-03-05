const { Schema, model } = require("mongoose"),
    messageModel = new Schema({
        groupname: { type: String, required: true },
        username: { type: String, required: true },
        profile: { type: String, required: true },
        message: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    });

module.exports = model("messages", messageModel);