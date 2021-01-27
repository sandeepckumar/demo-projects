require("dotenv").config();
const connectDB = require("./utils/db");
connectDB();
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var usersRouter = require("./routes/users.route");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/users", usersRouter);

module.exports = app;
