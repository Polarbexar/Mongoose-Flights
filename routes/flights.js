var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');


module.exports = router;

//GET /flights
router.get('/', flightsCtrl.index);
// GET /posts
router.get('/new', flightsCtrl.new);
// POST /posts
router.post('/', flightsCtrl.create);
// GET /flights/:id - show
router.get('/:id', flightsCtrl.show);