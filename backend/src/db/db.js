const mongoose = require("mongoose");
async function connectDB() {
    await mongoose.connect("mongodb+srv://completeback:2e58ysUGAzVgNRZF@complete-backend.qqkx1al.mongodb.net/ppost")
//process.env.MONGO_URI
    
    console.log("Connected to DB");
    console.log("Host:", mongoose.connection.host);
    console.log("DB:", mongoose.connection.name);
    console.log("State:", mongoose.connection.readyState);

}

module.exports = connectDB
