const socketIO = require("socket.io") // load socket io module
let app; // application variable
const port = process.env.PORT; // get port variable

try {
    app = require('./app'); // loading application to variable
} catch (error) {
    console.log(error)
}

const server = app.listen(port, () => {
    // logs if the server is successfully initialized
    console.error('Server is up on port ' + port) 
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
