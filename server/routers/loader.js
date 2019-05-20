const eventRouter = require("./event");
const matchRouter = require("./match");
const newsRouter = require("./news");
const teamRouter = require("./team");
const userRouter = require("./user");
const playerRouter = require("./player");
const matchEventRouter = require("./matchEvent");

// loads all files


module.exports = { // exports all files in one
    eventRouter,
    matchRouter,
    newsRouter,
    teamRouter,
    userRouter,
    playerRouter,
    matchEventRouter
}
