const mongoose = require("mongoose");

const connectDB = async (URI) => {
  const conn = await mongoose.connect(URI);
  return conn;
};

module.exports = connectDB;
