const { registerSchema, loginSchema } = require("../config/validationSchema");
const User = require("../models/model.user");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/keys");
const Joi = require("joi");
const bcrypt = require("bcrypt");

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

const loginController = async (req, res) => {
  try {
    await loginSchema.validateAsync(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ msg: "User doesn't exist, please register." });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ msg: "Username/Password is incorrect." });
    }
    const payload = {
      _id: user._id,
      email: user.email,
      isAdmin: user.isAdmin,
    };
    const accessToken = jwt.sign(payload, jwtSecret, { expiresIn: "1d" });
    res
      .status(201)
      .json({ msg: [{ LoggedIn: true, accessToken: accessToken }] });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", msg: error.message });
  }
};

module.exports = { registerController, loginController };
