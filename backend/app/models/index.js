const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;

// Use environment variable if available (for Docker)
db.url = process.env.MONGO_URL || dbConfig.url;

db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;