const express = require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/flights');

// GET /flights - index
router.get('/', flightsCtrl.index);

// GET /flights/new - new
router.get('/new', flightsCtrl.new);

// GET /flights/:id - show
router.get('/:id', flightsCtrl.show);

// POST /flights - create
router.post('/', flightsCtrl.create);

module.exports = router;
