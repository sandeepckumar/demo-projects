const Joi = require("joi");
const registerSchema = Joi.object({
  username: Joi.string().alphanum().min(3).required().max(15),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  repeat_password: Joi.string().equal(Joi.ref("password")).required(),
  email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  username: Joi.string().alphanum().min(3).required().max(15),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

module.exports = { registerSchema, loginSchema };
