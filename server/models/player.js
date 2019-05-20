const mongoose = require("mongoose"); // loads the mongoose dependency


const playerSchema = new mongoose.Schema({ // creates a the matchSchema and sets its properties
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        enum: [ "goalkeeper", "defender", "midfielder", "attacker"], // string validation
        required: true
    },
    team: {
        ref: "Team",
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})




const Player = mongoose.model("Player", playerSchema); // create match event model

module.exports = Player;
