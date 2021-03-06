const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const indexRouter = require("./routes/");

const logger = require("./logger");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger);

app.use("/api", indexRouter);

app.listen(port, () => {
  console.log("The server started on port 3000.");
});
