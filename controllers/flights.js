const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    index,
    new: addNew,
    create,
    show,
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
    res.render('flights/index', { title: 'All Flights', flights });
    });
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: req.params.id}, function(err, tickets) {
      res.render('flights/show', {
          title: 'Flight Detail',
          flight,
          tickets
      });
    })
  })
}

function addNew(req, res) {
    res.render('flights/new', { title: 'Add A Flight' });
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
    if (err) return res.redirect('/flights/new');
    console.log(flight)
    res.redirect(`/flights/${flight._id}`);
  });
}