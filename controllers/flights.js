// import the Flight model
const Flight = require('../models/flight');

// index
async function index(req, res) {
    try {
        const allFlights = await Flight.find();
        res.render('flights/index', {
            flights: allFlights,
            title: 'All Flights'
        });
    } catch (err) {
        console.log('An error occurred: \n', err);
        res.render('error', { 
            error: err,
            message: 'An error has occurred while displaying all flights'
        });
    }
}

// new
function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight'} );
}

module.exports = {
    index,
    new: newFlight
};