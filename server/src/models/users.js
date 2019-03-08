const { Schema, model } = require("mongoose"),
    bcrypt = require("bcrypt-nodejs"),
    userModel = new Schema({
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        profile: { type: String, required: false },
        gender: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    });

/**method to encrypt password users */
userModel.methods.encryptPassword = passwordHash => {
    return bcrypt.hashSync(passwordHash, bcrypt.genSaltSync(10));
}

/**method to compare password users */
userModel.methods.comparePassword = function (passwordCompare) {
    return bcrypt.compareSync(passwordCompare, this.password);
}

module.exports = model("users", userModel);