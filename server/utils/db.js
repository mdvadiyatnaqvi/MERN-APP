const mongoose = require("mongoose");

const URI = "mongodb://127.0.0.1:27017/mern_admin";

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database connected!");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Exit with a non-zero status code to indicate failure
  }
};

module.exports = connectDB;
