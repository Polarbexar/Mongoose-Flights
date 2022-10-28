const Flight = require('../models/flight');

module.exports = {
    create
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        // We push an object with the data for the 
        //review sub doc into Mongoose arrays
        flight.destination.push(req.body);
        flight.save(function(err) {
            //step5
            res.redirect(`/flights/${flight._id}`);
        });
    }).sort('arrival');
};