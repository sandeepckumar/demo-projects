var express = require("express");
var router = express.Router();

const { body } = require("express-validator");
const { registerController } = require("../controllers/users.controller");

router.post(
  "/register",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }).isString(),
    body("email", "Enter a vaild email").isEmail,
    body("password", "Enter a valid password").custom((value) => {
      const passreg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passreg.test(value))
        throw new Error(
          "Password does not meet the criteria, needs to be aleast of 8 character long and must have 1 letter & 1 number."
        );
      return true;
    }),
    body("confirmPassword").custom((value, { req }) => {
      if (value !== req.password) {
        throw new Error("Passwords do not match.");
      }
      return true;
    }),
  ],
  registerController
);

module.exports = router;
