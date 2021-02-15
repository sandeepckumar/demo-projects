const e = require("express");
const router = e.Router();
const {
  userController,
  registerController,
  loginController,
} = require("../controllers/controller.user");

router.post("/register", registerController);

router.post("/login", loginController);

module.exports = router;
