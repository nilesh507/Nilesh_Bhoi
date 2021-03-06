//Import the mongoose module
var mongoose = require('mongoose');
//Set up default mongoose connection
mongoose.connect('mongodb://localhost/codeial_development', {useNewUrlParser: true , useUnifiedTopology: true}); 
//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'Error connecting to mongoDB'));

db.once('open', function() {
    console.log('Connected to the Database :: mongoDB');
});

module.exports = db;
