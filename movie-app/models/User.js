const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, requried: true },
  password: { type: String, required: true },
  isValid: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  createdOn: { type: Date, default: Date.now() },
  lastActive: { type: Date, default: Date.now() },
  avatar: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

export default User;
