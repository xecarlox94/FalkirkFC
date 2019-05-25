const socketIO = require("socket.io") // load socket io module
const app = require('./app'); // load application variable
const port = process.env.PORT; // get port variable



const server = app.listen(port, () => {
    // logs if the server is successfully initialized
    console.log('Server is up on port ' + port) 
})


const io = socketIO(server) // initializes the websocket

//listens to client web sockets connecting
io.on("connection", (socket) => {

    // listens for the "live-match" event and stores the matchStream data
    socket.on("live-match", ( matchStream ) => {
        
        // broadcasts the data to all users
        socket.broadcast.emit("live-match-broadcast", matchStream ) 
        
    })
})
