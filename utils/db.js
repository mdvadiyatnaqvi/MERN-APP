const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

const connectDb = async (req, res) => {
  try {
    await mongoose.connect(URI);
    console.log("Database Connected!");
  } catch (error) {
    console.log("Database Connection Failed!");
    process.exit(1);
  }
};

module.exports = connectDb;
