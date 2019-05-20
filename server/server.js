const socketIO = require("socket.io") // load socket io module
const app = require('./app'); // load application variable
const port = process.env.PORT; // get port variable



const server = app.listen(port, () => {
    console.log('Server is up on port ' + port) // logs if the server is successfully initialized
})


const io = socketIO(server) // initializes the websocket


io.on("connection", (socket) => { //listens to client web sockets connecting
    
    console.log("user connected") // logs if a websocket client is connected

    socket.on("live-match", ( matchStream ) => { // listens for the "live-match" event and stores the matchStream data
        
        socket.broadcast.emit("live-match-broadcast", matchStream ) // broadcasts the data in 
        
    })

    socket.on("disconnect", () => { //listens to client web sockets disconnecting
        
        console.log("user disconnected") // logs if a websocket client is connected
        
    })
})
