const express = require('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/tickets');

// All routes start with / (root) path

// GET /flights/:id/tickets/new
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
// POST /flights/:id/tickets -  create
router.post('/flights/:id/tickets', ticketsCtrl.create);
// DELETE /tickets/:id - delete
router.delete('/tickets/:id', ticketsCtrl.delete);

module.exports = router;