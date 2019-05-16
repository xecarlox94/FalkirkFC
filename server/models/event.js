const mongoose = require("mongoose");


const eventSchema = new mongoose.Schema({
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
        default: Date.now()
    },
    body: {
        type: String,
        trim: true,
        required: true,
        minlength: 45
    }
})


const Event = mongoose.model("Event", eventSchema);



module.exports = Event;