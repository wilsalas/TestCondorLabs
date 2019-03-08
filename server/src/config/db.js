const mongoose = require("mongoose");
//configuration for accessing to the mongodb database
(async () => {
    try {
        await mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(`An error occurred connecting to MongoDB ${err}`);
    }
})();


