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
        required: true,
        min: 1,
        max: 36
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


matchSchema.virtual("events", {
    ref: "MatchEvent",
    localField: "_id",
    foreignField: "match"
})


matchSchema.statics.getMatches = async function( query ) {
    let fetchedMatches = await Match.find( query ).populate("events").populate("home").populate("away")
    let matches = [];
    for(let i = 0; i < fetchedMatches.length; i++ ){
        matches[i] = {};
        matches[i]._id = fetchedMatches[i]._id,
        matches[i].home = fetchedMatches[i].home,
        matches[i].away = fetchedMatches[i].away,
        matches[i].round = fetchedMatches[i].round,
        matches[i].time = fetchedMatches[i].time,
        matches[i].homeScore = fetchedMatches[i].homeScore,
        matches[i].awayScore = fetchedMatches[i].awayScore
    }
    matches.sort( (a, b) =>{
        const roundDif = a.round - b.round;
        if(roundDif == 0) {
            return a.time - b.time;
        }
        return roundDif;
    })
    return matches;
}


matchSchema.statics.getRoundMatches = async function( round_number ) {
    let fetchedMatches = await Match.find({ round: round_number }).populate("events").populate("home").populate("away")
    let matches = [];
    for(let i = 0; i < fetchedMatches.length; i++ ){
        matches[i] = {};
        matches[i]._id = fetchedMatches[i]._id,
        matches[i].home = fetchedMatches[i].home,
        matches[i].away = fetchedMatches[i].away,
        matches[i].round = fetchedMatches[i].round,
        matches[i].time = fetchedMatches[i].time,
        matches[i].homeScore = fetchedMatches[i].homeScore,
        matches[i].awayScore = fetchedMatches[i].awayScore
    }
    matches.sort( (a, b) => a.time - b.time )
    return matches;
}


matchSchema.statics.getMatchReport = async function(_id) {
    let match = await Match.findById(_id).populate("events").populate("home").populate("away")
    return {
        _id: match._id,
        home: match.home,
        away: match.away,
        round: match.round,
        time: match.time,
        homeScore: match.homeScore,
        awayScore: match.awayScore
    };
}


matchSchema.virtual("homeScore").get( function() {
    const events = this.events;
    if(!events) return 0;
    let homeScore = 0;

    for (const event of events) {
        if( event.team.toString() == this.home.id.toString() && event.typeEvent === "goal" ) homeScore++;
        if( event.team.toString() == this.away.id.toString() && event.typeEvent === "owngoal" ) homeScore++;
    }

    return homeScore;
})


matchSchema.virtual("awayScore").get( function() {
    const events = this.events;
    if(!events) return 0;
    let awayScore = 0;

    for (const event of events) {
        if( event.team.toString() == this.away.id.toString() && event.typeEvent === "goal" ) awayScore++;
        if( event.team.toString() == this.home.id.toString() && event.typeEvent === "owngoal" ) awayScore++;
    }
    
    return awayScore;
})


const Match = mongoose.model("Match", matchSchema);


module.exports = Match;