const eventRouter = require("./routers/event");
const matchRouter = require("./routers/match");
const newsRouter = require("./routers/news");
const teamRouter = require("./routers/team");
const userRouter = require("./routers/user");
const playerRouter = require("./routers/player");



module.exports = {
    eventRouter,
    matchRouter,
    newsRouter,
    teamRouter,
    userRouter,
    playerRouter
}