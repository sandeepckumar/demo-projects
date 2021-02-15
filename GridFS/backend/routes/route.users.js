const e = require("express");
const router = e.Router();

router.post("/register", (req, res) => {
  res.status(201).json({ msg: "Register route" });
});

router.post("/login", (req, res) => {
  res.status(201).json({ msg: "Login Route" });
});

module.exports = router;
