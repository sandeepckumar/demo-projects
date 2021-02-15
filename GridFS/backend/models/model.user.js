const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, trim: true, unique: true, required: true },
  password: { type: String, required: true },
  createdOn: { type: Date, Default: Date.now() },
});

userSchema.pre("save", async function () {
  try {
    const user = this;
    const saltRounds = 10;
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, saltRounds);
    }
  } catch (err) {
    throw err;
  }
});

module.exports = mongoose.model("User", userSchema);
