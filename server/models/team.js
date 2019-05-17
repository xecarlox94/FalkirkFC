const mongoose = require("mongoose");

const Match = require("./match")

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    manager: {
        type: String,
        required: true
    }
}, {
    toObject: {
        virtuals: true
    }
})

teamSchema.virtual("players", {
    ref: "Player",
    localField: "_id",
    foreignField: "team"
})

teamSchema.statics.getTable = async function() {
    const teams = await Team.find({})
    let tblRows = [];
    for(let i = 0; i < teams.length; i++){
        const performance = await teams[i].getPerformance();
        tblRows[i] = {
            team: {
                _id: teams[i]._id,
                name: teams[i].name
            },
            games: performance.games,
            wins: performance.wins,
            draws: performance.draws,
            loses: performance.loses,
            scored: performance.scored,
            conceded: performance.conceded,
            goalDiference: performance.goalDiference,
            points: performance.points
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


teamSchema.methods.getPerformance = async function() {
    let games = 0; let wins = 0; let draws = 0; let loses = 0; let scored = 0; let conceded = 0;
    let awayGames = await Match.getMatches({ away: this._id })
    let homeGames = await Match.getMatches({ home: this._id })


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
}


const Team = mongoose.model("Team", teamSchema);

module.exports = Team;