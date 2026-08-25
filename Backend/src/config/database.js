const mongoose = require('mongoose');

async function connectToDB() {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB");
    }
    catch (err) {
        console.log("Failed connecting to DB");
    }
}

module.exports = connectToDB;