const mongoose = require("mongoose");
async function connectDB() {
    await mongoose.connect("process.env.MONGO_URI")
//process.env.MONGO_URI it is the connection string of mongoDB
    
    console.log("Connected to DB");
    console.log("Host:", mongoose.connection.host);
    console.log("DB:", mongoose.connection.name);
    console.log("State:", mongoose.connection.readyState);

}

module.exports = connectDB
