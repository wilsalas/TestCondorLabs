const mongoose = require("mongoose");
//configuration for accessing the mongodb database
(async () => {
    try {
        await mongoose.connect(process.env.DB_HOST, {
            auth: {
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
            }
            , useNewUrlParser: true
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(`An error occurred connecting to MongoDB ${err}`);
    }
})();


