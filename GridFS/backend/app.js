require("dotenv").config();
const express = require("express");
const app = express();
const logger = require("morgan");
const PORT = process.env.PORT || 5000;
const userRouter = require("./routes/route.users");

app.use(logger("dev"));
app.use(express.json());

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT ${PORT}`);
});
