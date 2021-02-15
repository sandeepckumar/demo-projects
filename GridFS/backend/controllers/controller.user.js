const { registerSchema, loginSchema } = require("../config/validationSchema");
const User = require("../models/model.user");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/keys");
const Joi = require("joi");

const registerController = async (req, res) => {
  try {
    const result = await registerSchema.validateAsync(req.body);
    const emailExists = await User.findOne({ email: result.email });
    if (emailExists) {
      return res
        .status(400)
        .json({ msg: "User already registered, please login." });
    }
    const user = await User.create(result);
    user.save();
    res.status(201).json({ msg: "Registration sucessfull" });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal Server Error", error: error.message });
  }
};

const loginController = (req, res) => {};

module.exports = { registerController, loginController };
