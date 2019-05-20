const mongoose = require("mongoose"); // loads the mongoose dependency


const matchSchema = new mongoose.Schema({ // creates a the matchSchema and sets its properties
    
    home: { // creates a property which stores Team model object ids, and it makes it required
        ref: "Team",
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    away: { // creates a property which stores Team model object ids, and it makes it required
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
        default: Date.now() // sets the date for the time it was created
    }
}, {
    toObject: {
        virtuals: true // sets all virtual properties to be available in the object form
    }
})


matchSchema.virtual("events", { // creates a virtual property that stores all match events of this match
    ref: "MatchEvent",
    localField: "_id",
    foreignField: "match"
})


matchSchema.statics.getMatches = async function( query ) { // creates a model method that returns all matches that match the query
    
    let fetchedMatches = await Match.find( query ).populate("events").populate("home").populate("away") // populates virtual properties
    
    let matches = []; // creates a new match array
    
    for(let i = 0; i < fetchedMatches.length; i++ ) { // loops through all fetched matches
        matches[i] = {}; // initializes an empty object
        matches[i]._id = fetchedMatches[i]._id,
        matches[i].home = fetchedMatches[i].home,
        matches[i].away = fetchedMatches[i].away,
        matches[i].round = fetchedMatches[i].round,
        matches[i].time = fetchedMatches[i].time,
        matches[i].homeScore = fetchedMatches[i].homeScore,
        matches[i].awayScore = fetchedMatches[i].awayScore
    }
    
    matches.sort( (a, b) =>{ // sorts all games, first by round and by time
        const roundDif = a.round - b.round;
        if(roundDif == 0) {
            return a.time - b.time;
        }
        return roundDif;
    })
    
    return matches; // returns all the matches
}


matchSchema.statics.getRoundMatches = async function( round_number ) { // creates a model method that returns all matches per each round
    
    let fetchedMatches = await Match.find({ round: round_number }).populate("events").populate("home").populate("away") // populates all virtual properties
    
    let matches = []; // creates a new match array
    
    for(let i = 0; i < fetchedMatches.length; i++ ){ // loops through all fetched matches
        matches[i] = {}; // initializes an empty object
        matches[i]._id = fetchedMatches[i]._id,
        matches[i].home = fetchedMatches[i].home,
        matches[i].away = fetchedMatches[i].away,
        matches[i].round = fetchedMatches[i].round,
        matches[i].time = fetchedMatches[i].time,
        matches[i].homeScore = fetchedMatches[i].homeScore,
        matches[i].awayScore = fetchedMatches[i].awayScore
    }
    matches.sort( (a, b) => a.time - b.time ) // sorts all games by time
    return matches; // returns all the matches
}


matchSchema.statics.getMatchReport = async function(_id) { // get a model method that return a matche report
    
    let match = await Match.findById(_id).populate("events").populate("home").populate("away") // populates virtual properties
    
    return {
        _id: match._id,
        home: match.home,
        away: match.away,
        round: match.round,
        time: match.time,
        homeScore: match.homeScore,
        awayScore: match.awayScore
    }; // returns a match report
}


matchSchema.virtual("homeScore").get( function() { // Returns a functions which calculates the homeScore  property
    
    const events = this.events; // assigns the events variable with this events 
    
    if(!events) return 0; // if no events, return 0
    
    let homeScore = 0; // initialize homeScore 

    for (const event of events) {
        if( event.team.toString() == this.home.id.toString() && event.typeEvent === "goal" ) homeScore++; // if home team scores a goal, increases homeScore property
        if( event.team.toString() == this.away.id.toString() && event.typeEvent === "owngoal" ) homeScore++; // if away team scores a owngoal, increases homeScore property
    }

    return homeScore;
})


matchSchema.virtual("awayScore").get( function() { // Returns a functions which calculates the homeScore  property
    
    const events = this.events; // assigns the events variable with this events 
    
    if(!events) return 0; // if no events, return 0
    
    let awayScore = 0; // initialize awayScore 

    for (const event of events) {
        if( event.team.toString() == this.away.id.toString() && event.typeEvent === "goal" ) awayScore++; // if away team scores a goal, increases awayScore property
        if( event.team.toString() == this.home.id.toString() && event.typeEvent === "owngoal" ) awayScore++; // if home team scores a goal, increases homeScore property
    }
    
    return awayScore;
})


const Match = mongoose.model("Match", matchSchema); // creates Match model from the matchSchema


module.exports = Match;

