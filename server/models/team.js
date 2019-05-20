const mongoose = require("mongoose"); // loads the mongoose dependency

const Match = require("./match"); // loads the Match model

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

teamSchema.virtual("players", { // creates a virtual property that stores all team's players
    ref: "Player",
    localField: "_id",
    foreignField: "team"
})

teamSchema.statics.getTable = async function() { // returns the league table
    const teams = await Team.find({}) // return all the teams
    
    let tblRows = []; // initializes all the rows
    
    for(let i = 0; i < teams.length; i++){
        const performance = await teams[i].getPerformance(); // returns each team's performance
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
        } // assign the report to each row
    }
    tblRows.sort( (a, b) => { // sorting table
        const points = b.points - a.points; // sorting first by points
        if(points === 0){
            const goalDiference = b.goalDiference - a.goalDiference; // sorting by goal difference
            if(goalDiference === 0) return b.goalsScored - a.goalsScored; // sorting by goals scored
            return goalDiference;
        }
        return points;
    })
    return tblRows;
}


teamSchema.methods.getPerformance = async function() {
    let games = 0; let wins = 0; let draws = 0; let loses = 0; let scored = 0; let conceded = 0; // initialize all performance variables
    let awayGames = await Match.getMatches({ away: this._id }) // get all away matches
    let homeGames = await Match.getMatches({ home: this._id }) // get all home matches


    for (const match of homeGames) { // loop through all home matches
        
        if( match.time - Date.now() > 0 ) continue; // if the game is in the future, continue
        games++; // increase number 
        let res = match.homeScore - match.awayScore; // get difference goals
        if(res > 0) wins++
        else if(res == 0) draws++
        else loses ++
        scored += match.homeScore;
        conceded += match.awayScore;
    } // assign performance properties based on difference goals

    for (const match of awayGames) { // loop through all away matches
        
        if( match.time - Date.now() > 0 ) continue; // if the game is in the future, continue
        games++; // increase number 
        let res = match.awayScore - match.homeScore; // get difference goals
        if(res > 0) wins++
        else if(res == 0) draws++
        else loses ++
        conceded += match.homeScore;
        scored += match.awayScore;
    } // assign performance properties based on difference goals
    
    let goalDiference = scored - conceded; let points = ( wins * 3) + draws; // calculate goal difference and points
    return { games, wins, draws, loses, scored, conceded, goalDiference, points }; // return performance
}


const Team = mongoose.model("Team", teamSchema); // create Team model based on team schema

module.exports = Team;
