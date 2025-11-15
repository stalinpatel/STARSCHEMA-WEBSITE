const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  const dbString = process.env.DB_CONNECTION_STRING;

  if (!dbString) {
    console.error("MongoDB connection string is missing in .env");
    process.exit(1); // Exit if no connection string
  }

  try {
    await mongoose.connect(dbString);
    console.log("MongoDB connected successfully....");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
