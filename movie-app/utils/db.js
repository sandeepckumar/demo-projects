const { mongoURI } = require("../config");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB CONNECTED", [mongoURI]);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
