const mongoose = require("mongoose");
const configuration = require("./configuration");
const userModel = require("../models/user.model");

const connectDB = async () => {
  try {
    await mongoose.connect(configuration.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log("error db: " + error.message);
  }
};

module.exports = connectDB;
