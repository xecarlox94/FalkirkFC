require('./db/mongoose')
const express = require('express')
const app = express()

const eventRouter = require("./routers/event");
const matchRouter = require("./routers/match");
const newsRouter = require("./routers/news");
const teamRouter = require("./routers/team");
const userRouter = require("./routers/user");
const playerRouter = require("./routers/player");

app.use(express.json())


// global error handling
app.use("/events", eventRouter);
app.use("/matches", matchRouter);
app.use("/news", newsRouter);
app.use("/players", playerRouter);
app.use("/teams", teamRouter);
app.use("/users", userRouter);





module.exports = app