const mongoose = require("mongoose"); // loads the mongoose dependency


const eventSchema = new mongoose.Schema({ // creates a the eventSchema and sets its properties
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 35
    },
    subtitle: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 45
    },
    time: {
        type: Date,
        required: true,
        default: Date.now() // sets the date for the time it was created
    },
    body: {
        type: String,
        trim: true,
        required: true,
        minlength: 45
    }
})


const Event = mongoose.model("Event", eventSchema); // creates a mongoose model called "Event" using the eventSchema



module.exports = Event; // exports the Event model
