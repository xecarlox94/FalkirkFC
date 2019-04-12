const mongoose = require("mongoose");


// add table stats
const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    manager: {
        type: String,
        required: true
    },
    players: [
        {
            ref: "Player",
            type: mongoose.Schema.Types.ObjectId
        }
    ]
}, {
    toObject: {
        virtuals: true
    }
})

teamSchema.statics.getTable = async function() {
    const teams = await Team.find({}).populate("awayMatches").populate("homeMatches")
    let tblRows = [];
    for(let i = 0; i < teams.length; i++){
        tblRows[i] = {
            team: {
                _id: teams[i]._id,
                name: teams[i].name
            },
            games: teams[i].performance.games,
            wins: teams[i].performance.wins,
            draws: teams[i].performance.draws,
            loses: teams[i].performance.loses,
            scored: teams[i].performance.scored,
            conceded: teams[i].performance.conceded,
            goalDiference: teams[i].performance.goalDiference,
            points: teams[i].performance.points
        }
    }
    tblRows.sort( (a, b) => {
        const points = b.points - a.points;
        if(points === 0){
            const goalDiference = b.goalDiference - a.goalDiference;
            if(goalDiference === 0) return b.goalsScored - a.goalsScored;
            return goalDiference;
        }
        return points;
    })
    return tblRows;
}

teamSchema.virtual("awayMatches", {
    ref: "Match",
    localField: "_id",
    foreignField: "away"
})

teamSchema.virtual("homeMatches", {
    ref: "Match",
    localField: "_id",
    foreignField: "home"
})


teamSchema.virtual("performance").get( function() {
    let games = 0; let wins = 0; let draws = 0; let loses = 0; let scored = 0; let conceded = 0;
    let awayGames = this.awayMatches; let homeGames = this.homeMatches;

    for (const match of homeGames) {
        if( match.time - Date.now() > 0 ) continue;
        games++
        let res = match.homeScore - match.awayScore;
        if(res > 0) wins++
        else if(res == 0) draws++
        else loses ++
        scored += match.homeScore;
        conceded += match.awayScore;
    }

    for (const match of awayGames) {
        if( match.time - Date.now() > 0 ) continue;
        games++
        let res = match.awayScore - match.homeScore;
        if(res > 0) wins++
        else if(res == 0) draws++
        else loses ++
        conceded += match.homeScore;
        scored += match.awayScore;
    }
    
    let goalDiference = scored - conceded; let points = ( wins * 3) + draws;
    return { games, wins, draws, loses, scored, conceded, goalDiference, points };
})

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;