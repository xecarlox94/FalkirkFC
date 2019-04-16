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
    round: {
        type: Number,
        min: 1,
        max: 36,
        required: true,
        default: 1
    },
    time: {
        type: Date,
        required: true,
        default: Date.now()
    }
}, {
    toObject: {
        virtuals: true
    }
})


// add round Matches Report

matchSchema.statics.getMatchReport = async function(_id){
    let match = await Match.findById(_id).populate("events")
    
    return {
        _id: match._id,
        home: match.home,
        away: match.away,
        round: match.round,
        time: match.time,
        homeScore: match.homeScore,
        awayScore: match.awayScore,
        events: match.events,
    };
}

matchSchema.virtual("events", {
    ref: "MatchEvent",
    localField: "_id",
    foreignField: "match"
})

matchSchema.virtual("homeScore").get( function () {
    const events = this.events;
    // console.log(this.events)
    if(!events) return 0;
    let homeScore = 0;
    
    for (const event of events) {
        console.log(event)
        // if(event)
    }
    
    return homeScore;
})

matchSchema.virtual("awayScore").get( function () {
    const events = this.events;
    // console.log(events)
    return 1;
})


const Match = mongoose.model("Match", matchSchema);


module.exports = Match;