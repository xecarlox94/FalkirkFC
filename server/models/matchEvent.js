const mongoose = require("mongoose");


const matchSchema = new mongoose.Schema({ // enum with type of event
})


const Match = mongoose.model("MatchEvent", matchSchema);


module.exports = Match;