const e = require("express");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/keys");

const verifyAccessToken = (req, res, next) => {
  const headers = req.headers.authorization;
  if (headers) {
    const token = headers.spilt(" ")[1];
    if (token === undefined) {
      return res.status(401).json({ msg: "No Token Provided." });
    }
    jwt.verify(token, jwtSecret, function (err, user) {
      if (!err) {
        req.user = user._id;
        next();
      }
      return res.status(400).json({ msg: "Token not valid" });
    });
  } else {
    res.status(401).json({ msg: "Unauthorized" });
  }
};

module.exports = verifyAccessToken;
