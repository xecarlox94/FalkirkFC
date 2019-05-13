const socketIO = require("socket.io")
const app = require('./app')
const port = process.env.PORT



const server = app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


const io = socketIO(server)


io.on("connection", (socket) => {
    console.log("USER CONNECTED")

    socket.on("disconnect", () => {
        console.log("user disconnected")
    })
})