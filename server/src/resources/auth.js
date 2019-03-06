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
        return done(...PassportDone(200, "", `Bearer ${jwt.sign({ _id: `${user._id}` }, process.env.SECRETKEY)}`));
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

/**Callback type passport authenticate user */
const AuthenticateUser = (nameAuth, req, res) => {
    passport.authenticate(nameAuth, { session: false }, (errors, user, info) => {
        if (info.message === "Missing credentials" && !errors) {
            return res.status(401).json({
                status: 401,
                response: "Please enter an email and a password"
            });
        }
        if (!errors) {
            let response = info.status !== 200 ? info.errors : user;
            return res.status(info.status).json({ status: info.status, response });
        }
    })(req, res);
}


/**Callback passport autheticate  routes jwt*/
const AuthenticateJWT = (req, res, cb) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err || !user) {
            return res.status(401).json({ status: 401, response: "Unauthorized user" });
        }
        cb({ status: info.status, response: user });
    })(req, res)
}

module.exports = {
    AuthenticateUser,
    AuthenticateJWT
};