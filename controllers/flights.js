// import the Flight model
const Flight = require('../models/flight');

// index
async function index(req, res) {
    try {
        const allFlights = await Flight.find().sort({ departs: 1 });
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
    // default departure date to today + 1 year
    const newFlight = new Flight();
    // get the default date
    const dt = newFlight.departs;
    // format the date for the form input's value attribute
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('flights/new', { 
        departsDate,
        title: 'Add Flight'
    });
}

// create
async function create(req, res) {

    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log('An error occurred: \n', err);
        res.render('error', { 
            error: err,
            message: 'An error has occurred while displaying all flights'
        });
    }
}

module.exports = {
    index,
    new: newFlight,
    create
};