const mongoose = require("mongoose");


const matchSchema = new mongoose.Schema({
    home: {
        ref: "Team",
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    away: {
        ref: "Team",
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    homeScore: {
        type: Number,
        required: true,
        default: 0
    },
    awayScore: {
        type: Number,
        required: true,
        default: 0
    },
    round: {
        type: Number,
        required: true,
        default: 0
    },
    time: {
        type: Date,
        required: true,
        default: Date.now()
    },
    events: [
        {
            ref: "MatchEvent",
            type: mongoose.Schema.Types.ObjectId
        }
    ]
})


matchSchema.index({ home: 1, away: 1}, { unique: true })


const Match = mongoose.model("Match", matchSchema);


module.exports = Match;