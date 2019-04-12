const mongoose = require("mongoose");


const eventSchema = new mongoose.Schema({ // add enum for each type of event
    
})


const Event = mongoose.model("Event", eventSchema);



module.exports = Event;