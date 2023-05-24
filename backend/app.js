const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

// import routes
const user = require("./controller/user");
const users = require("./controller/users");
const workplace = require("./controller/workplace")

app.use("/api/v2/user", user);
app.use("/api/v2/users", users);
app.use("/api/v2/workplaces", workplace);

// it is for ErrorHandling
app.use(ErrorHandler);
module.exports = app;
