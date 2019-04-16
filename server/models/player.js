const mongoose = require("mongoose");


const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        enum: [ "goalkeeper", "defender", "midfielder", "attacker"],
        required: true
    },
    team: {
        ref: "Team",
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})




const Player = mongoose.model("Player", playerSchema);

module.exports = Player;