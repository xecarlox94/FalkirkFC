require('./db/mongoose') // executes the mongoose database file

const cors = require("cors") // loads the cors dependency

const path = require("path") // loads the path, a nodejs native library

const express = require('express') // loads express.js, a web server application

const app = express() // it intializes the express application and it stores it in th app variable


const public_static = path.join(__dirname, "/../public"); // it stores a string location for the public folder

const routers = require("./routers/loader"); // it loads all the routers

app.use(express.json()) // middleware that sets the express application to use JSON

app.use(cors()) // it enables Cross-Origin Resource Sharing 

app.use(express.static(public_static)) // makes the public folder available to clients



app.use("/events", routers.eventRouter); // loads the event router and sets its global path to "/events"

app.use("/matches", routers.matchRouter); // loads the matches router and sets its global path to "/matches"

app.use("/matchEvents", routers.matchEventRouter); // loads the matchEvents router and sets its global path to "/matchEvents"

app.use("/news", routers.newsRouter); // loads the news router and sets its global path to "/news"

app.use("/players", routers.playerRouter); // loads the players router and sets its global path to "/players"

app.use("/teams", routers.teamRouter); // loads the teams router and sets its global path to "/teams"

app.use("/users", routers.userRouter); // loads the users router and sets its global path to "/users"


app.get('*', (req, res) => { // it sets a wilcard for all http requests
  
    res.sendFile(path.join(public_static, '/index.html')); // sends the index.html file, located in the public folder
  
});

module.exports = app; // exports the express application variable
