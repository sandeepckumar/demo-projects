const e = require("express");
const router = e.Router();
const {
  userController,
  registerController,
} = require("../controllers/controller.user");

router.post("/register", registerController);

router.post("/login", (req, res) => {
  res.status(201).json({ msg: "Login Route" });
});

module.exports = router;
