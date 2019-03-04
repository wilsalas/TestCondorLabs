const { Schema, model } = require("mongoose"),
    groupModel = new Schema({
        name: { type: String, required: true },
        type: { type: String, default: "All" },
        relationship: { user1: { type: String, default: "" }, user2: { type: String, default: "" } },
        createdAt: { type: Date, default: Date.now }
    });

module.exports = model("groups", groupModel);