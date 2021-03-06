const mongoose = require('mongoose'); // loads mongoose module

mongoose.connect(process.env.MONGODB_URL, { // connects to cluster
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})






// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database');
});

// On Error
mongoose.connection.on('error', (err) => {
    throw new Error(err);
});
