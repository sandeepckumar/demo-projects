const e = require("express");
const { fsUploadController } = require("../controllers/controller.fs");
const router = e.Router();

router.post("/upload", fsUploadController);

module.exports = { router };
