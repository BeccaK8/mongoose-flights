// import the Ticket and Flight model
const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

function newTicket(req, res) {
    res.render('tickets/new', {
        title: 'Add Ticket',
        flight_id: req.params.id 
    });
}

async function create(req, res) {
    try {
        // add the flight to the req.body
        const flight = await Flight.findById(req.params.id);
        req.body.flight = flight;

        // create the ticket
        await Ticket.create(req.body);

        res.redirect(`/flights/${flight._id}`);
    } catch(err) {
        console.log('An error occurred: \n', err);
        res.render('error', { 
            error: err,
            message: 'An error has occurred while creating ticket'
        });
    }
}

async function deleteTicket(req, res) {
    try {
        await Ticket.findByIdAndDelete(req.params.id);
        res.redirect(`/flights/${req.body.flightId}`);
    } catch(err) {
        console.log('An error occurred: \n', err);
        res.render('error', { 
            error: err,
            message: 'An error has occurred while deleting ticket'
        });
    }
}

module.exports = {
    new: newTicket,
    create,
    delete: deleteTicket
}