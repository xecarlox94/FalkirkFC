require('./db/mongoose')
const express = require('express')
const app = express()

const routers = require("./routers/loader");

app.use(express.json())


// global error handling
app.use("/events", routers.eventRouter);
app.use("/matches", routers.matchRouter);
app.use("/news", routers.newsRouter);
app.use("/players", routers.playerRouter);
app.use("/teams", routers.teamRouter);
app.use("/users", routers.userRouter);





module.exports = app