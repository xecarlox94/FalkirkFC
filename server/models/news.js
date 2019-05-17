const mongoose = require("mongoose");


const newsSchema = new mongoose.Schema({
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
        default: Date.now()
    },
    body: {
        type: String,
        trim: true,
        required: true,
        minlength: 45
    }
})


const News = mongoose.model("News", newsSchema);



module.exports = News;