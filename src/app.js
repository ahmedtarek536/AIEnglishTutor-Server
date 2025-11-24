require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

const usersRoute = require("./routes/users.routes");
const languageRoute = require("./routes/language.route");
const levelRoute = require("./routes/level.route");
const unitRoute = require("./routes/unit.route");
const lessonRoute = require("./routes/lesson.route");

app.use("/api/v1/users", usersRoute);
app.use("/api/v1/languages", languageRoute);
app.use("/api/v1/levels", levelRoute);
app.use("/api/v1/units", unitRoute);
app.use("/api/v1/lessons", lessonRoute);

module.exports = app;
