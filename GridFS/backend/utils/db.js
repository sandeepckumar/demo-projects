const mongoose = require("mongoose");
const { mongoURI } = require("../config/keys");

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB CONNECTED", `RUNNING ${process.env.NODE_ENV} ENV`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
