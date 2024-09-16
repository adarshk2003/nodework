const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

async function mongoConnect() {
    try {
        console.log("mogodb uri", process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connection established");
    } catch (error) {
        console.log("error", error);
    }
}
module.exports = mongoConnect;