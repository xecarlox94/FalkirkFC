const mongoose = require("mongoose"); // loads the mongoose dependency

const Match = require("./match") // loads the Match model
const Player = require("./player") // loads the Player model

const matchEventSchema = new mongoose.Schema({
    typeEvent: {
        type: String,
        enum: ["goal", "owngoal", "yellow", "red"], // string validation
        required: true
    },
    minute: {
        type: Number,
        min: 0,
        max: 120,
        required: true
    },
    match: {
        ref: "Match", // creates a property which stores Match model object ids, and it makes it required
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    team: {
        ref: "Team", // creates a property which stores Team model object ids, and it makes it required
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        validate: function(team_id){ // it validates if the team is part the home or away team
            
            const match_id = this.match;
            return new Promise( function(resolve, reject) {
                
                Match.findById(match_id)
                     .then( (match) => {
                        if( (team_id == match.home.toHexString()) || (team_id == match.away.toHexString()) ) resolve()
                        else reject("Not Found")
                     })
                     .catch( (rej) => {
                         throw new Error(rej)
                     })
            })
        }
    },
    player: {
        ref: "Player", // creates a property which stores PLayer model object ids, and it makes it required
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        validate: function(player_id){ // it validates if the player is part of the team the event is for
            
            const team_id = this.team
            return new Promise( function(resolve, reject) {
                
                Player.findById(player_id)
                      .then( (player)=> {
                          if( player.team.toHexString() == team_id) resolve()
                          else reject()
                      })
                      .catch( (rej) => {
                          throw new Error(rej)
                      })
            })
        }
    }
}, {
    toObject: {
        virtuals: true // sets all virtual properties to be available in the object form
    }
})


matchEventSchema.statics.getEventsMatch = async function( match_id ){ // get all events from each match
    
    let match_events = await MatchEvent.find({ match: match_id }).populate("team").populate("player") // get matches all populate virtual properties
    
    match_events.sort((a, b) => a.minute - b.minute ) // sort the match events by minute
    
    return match_events;
}


const MatchEvent = mongoose.model("MatchEvent", matchEventSchema); // create match event model


module.exports = MatchEvent;
