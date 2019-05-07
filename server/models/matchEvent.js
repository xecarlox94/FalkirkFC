const mongoose = require("mongoose");

const Match = require("./match")
const Player = require("./player")

const matchEventSchema = new mongoose.Schema({
    typeEvent: {
        type: String,
        enum: ["goal", "owngoal", "yellow", "red"],
        required: true
    },
    minute: {
        type: Number,
        min: 0,
        max: 120,
        required: true
    },
    match: {
        ref: "Match",
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    team: {
        ref: "Team",
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        validate: function(team_id){
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
        ref: "Player",
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        validate: function(player_id){
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
        virtuals: true
    }
})


matchEventSchema.statics.getEventsMatch = async function( match_id ){
    let match_events = await MatchEvent.find({ match: match_id }).populate("team").populate("player")
    match_events.sort((a, b) => a.minute - b.minute )
    return match_events;
}


const MatchEvent = mongoose.model("MatchEvent", matchEventSchema);


module.exports = MatchEvent;