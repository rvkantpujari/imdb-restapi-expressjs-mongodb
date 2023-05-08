const mongoose = require("mongoose");

const connectDB = async (URI) => {
    const conn = await mongoose
        .connect(URI)
        .then(() => console.log("Connected to MongoDB"))
        .catch((error) => console.log(error));
    return conn;
};

module.exports = connectDB;
