const express = require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/flights');

// GET /flights - index
router.get('/', flightsCtrl.index);

// GET /flights/new - new
router.get('/new', flightsCtrl.new);

// POST /flights - create
router.post('/', flightsCtrl.create);

module.exports = router;
