const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL);

// shortcut to the mongoose.connection obj
const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDb ${db.name} at ${db.host}:${db.port}`);
});