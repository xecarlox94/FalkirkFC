require('./db/mongoose')
const cors = require("cors")
const path = require("path")
const express = require('express')
const app = express()


const public_static = path.join(__dirname, "/../public");
const routers = require("./routers/loader");

app.use(express.json())
app.use(cors())
app.use(express.static(public_static))

// global error handling needed

app.use("/events", routers.eventRouter);
app.use("/matches", routers.matchRouter);
app.use("/matchEvents", routers.matchEventRouter);
app.use("/news", routers.newsRouter);
app.use("/players", routers.playerRouter);
app.use("/teams", routers.teamRouter);
app.use("/users", routers.userRouter);
  
app.get('*', (req, res) => {
    res.sendFile(path.join(public_static, '/index.html'));
});

module.exports = app