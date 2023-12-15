// import the Flight and Ticket models
const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

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

// show
async function show(req, res) {
        // const flight = await Flight.findById(req.params.id, function(err, flight) {
        //     Ticket.find({flight: flight._id}, function(err, tickets) {
        //         res.render('flights/show', {
        //             flight,
        //             tickets, 
        //             title: 'Flight Details'
        //         });
        //     });
        // });
        // Option 2

    // const rtnFlight = await Flight.findById(req.params.id)
    // .then(function (f) {
    //     const tickets = Ticket.find({flight: rtnFlight._id});
    //     res.render('flights/show', {
    //         flight: rtnFlight,
    //         tickets,
    //         title: 'Flight Details'
    //     });
    // })
    // .catch(function(err) {
    //     console.log('An error occurred: \n', err);
    //     res.render('error', { 
    //         error: err,
    //         message: 'An error has occurred while showing flight details'
    //     });
    // });

    // Option 3
    try {
        const flight = await Flight.findById(req.params.id);
        const tickets = await Ticket.find({flight: flight._id});
        res.render('flights/show', {
            flight,
            tickets, 
            title: 'Flight Details'
        });
    } catch (err) {
        console.log('An error occurred: \n', err);
        res.render('error', { 
            error: err,
            message: 'An error has occurred while showing flight details'
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
    show,
    new: newFlight,
    create
};