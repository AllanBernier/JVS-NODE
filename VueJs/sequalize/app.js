const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const router = express.Router();

const userRoute = require("./routes/userRoutes");

// setting middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/user", userRoute);

module.exports = app;