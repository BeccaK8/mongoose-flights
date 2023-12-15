// import the Ticket model
const Ticket = require('../models/ticket');

function newTicket(req, res) {
    res.render('tickets/new', {
        title: 'Add Ticket',
        flight_id: req.params.id 
    });
}

module.exports = {
    new: newTicket
}