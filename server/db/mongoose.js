const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
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
    console.log('Database error: '+err);
  });