const mongoose = require("mongoose"); // loads the mongoose dependency


const newsSchema = new mongoose.Schema({ // creates a the newsSchema and sets its properties
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
    topic: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
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


const News = mongoose.model("News", newsSchema); // creates Match model from the newsSchema



module.exports = News;
