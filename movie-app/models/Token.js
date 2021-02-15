const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, required: true, ref: User },
  token: { type: String, required: true },
  iat: { type: Date, requried: true, default: Date.now(), expires: "2h" },
});

const Token = mongoose.model("Token", tokenSchema);

export default Token;
