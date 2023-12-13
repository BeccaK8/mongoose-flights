const express = require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/flights');

// GET /flights - index
router.get('/', flightsCtrl.index);

module.exports = router;
