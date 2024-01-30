const mongoose = require("mongoose");


const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };


const connectDB = (uri) => {
    console.log("connection succeeded");
    return mongoose.connect(uri, clientOptions)
}

module.exports = connectDB;