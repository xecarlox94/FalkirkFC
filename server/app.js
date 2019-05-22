require('./db/mongoose') // executes the mongoose database file
const cors = require("cors") // loads the cors dependency
const path = require("path") // loads the path, a nodejs native library
const express = require('express') // loads express.js, a web server application
const app = express() // initializes the express application and it stores it in the app variable

app.use(express.json()) // middleware that sets the express application to use JSON
app.use(cors())  // middleware that enables Cross-Origin Resource Sharing

// stores a string location for the public folder
// makes the public folder available to clients
const public_static = path.join(__dirname, "/../public"); 
app.use(express.static(public_static)) 

// loads all the routers
const routers = require("./routers/loader");
app.use("/events", routers.eventRouter); // loads the event router and sets its global path to "/events"
app.use("/matches", routers.matchRouter); // loads the matches router and sets its global path to "/matches"
app.use("/matchEvents", routers.matchEventRouter); // loads the matchEvents router and sets its global path to "/matchEvents"
app.use("/news", routers.newsRouter); // loads the news router and sets its global path to "/news"
app.use("/players", routers.playerRouter); // loads the players router and sets its global path to "/players"
app.use("/teams", routers.teamRouter); // loads the teams router and sets its global path to "/teams"
app.use("/users", routers.userRouter); // loads the users router and sets its global path to "/users"

// it sets a wilcard for all http requests
app.get('*', (req, res) => { 
    // sends the index.html file, located in the public folder
    res.sendFile(path.join(public_static, '/index.html')); 
  
});


module.exports = app; // exports the express application variable
