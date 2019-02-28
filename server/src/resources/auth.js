const passport = require("passport"),
    jwt = require("jsonwebtoken"),
    LocalStrategy = require("passport-local"),
    userModel = require("../models/users"),
    { Strategy, ExtractJwt } = require("passport-jwt");

/**Register auth users */
passport.use("register", new LocalStrategy.Strategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, emailPassport, passwordPassport, done) => {

    try {
        let user = await userModel.findOne().where({ email: emailPassport }).select('_id');
        if (!user) {
            let newUser = new userModel;
            newUser.name = req.body.name;
            newUser.email = emailPassport;
            newUser.password = newUser.encryptPassword(passwordPassport);
            newUser.profile = req.body.profile;
            newUser.gender = req.body.gender;
            await newUser.save();
            return done(...PassportDone(200, "", "Registered user successfully"));
        } else {
            return done(...PassportDone(409, "The email entered already exists."));
        }
    } catch (error) {
        return done(...PassportDone(500, "An error has occurred try again please."));
    }
}));

/**Login auth users */
passport.use('login', new LocalStrategy.Strategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, emailPassport, passwordPassport, done) => {
    try {
        let user = await userModel.findOne().where({ email: emailPassport }).select('_id password');
        if (!user) {
            return done(...PassportDone(404, "User not found."));
        }
        if (!user.comparePassword(passwordPassport)) {
            return done(...PassportDone(403, "Incorrect password."));
        }
        return done(...PassportDone(200, "", `Bearer ${jwt.sign(user._id.toJSON(), process.env.SECRETKEY)}`));
    } catch (error) {
        return done(...PassportDone(500, "An error has occurred try again please."));
    }
}));

/**Compare token users*/
passport.use('jwt', new Strategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRETKEY
}, async (token, done) => {
    try {
        let user = await userModel.findOne().where({ _id: token._id });
        return done(...PassportDone(200, "", user ? user : false));
    } catch (err) {
        return done(...PassportDone(500, "An error has occurred try again please."));
    }
}));

/**PassportDone message */
const PassportDone = (status, errors = null, user = false) => [false, user, { status, errors }];

/**Callback type passport authenticate */
module.exports = (nameAuth, req, res) => {
    passport.authenticate(nameAuth, { session: false }, (errors, user, info) => {
        if (info.message === "Missing credentials" && !errors) {
            return res.status(401).json({
                status: 401,
                response: [{
                    msg: nameAuth === "jwt" ?
                        "Unauthorized user" :
                        "Please enter an email and a password"
                }]
            });
        }
        if (!errors) {
            // let listErrors = Array.isArray(info.errors) ? info.errors : [{ msg: info.errors }],
            let response = info.status !== 200 ? info.errors : user;
            return res.status(info.status).json({ status: info.status, response });
        }
    })(req, res);
}
