const Flight = require('../models/flight');

async function create(req, res) {
    console.log('in the controllers/destinations/create method');
    const flight = await Flight.findById(req.params.id);
    flight.destinations.push(req.body);
    try {
        await flight.save();
    } catch(err) {
        console.log('An error occurred: \n', err);
        res.render('error', { 
            error: err,
            message: 'An error has occurred while adding flight destination'
        });
    }

    res.redirect(`/flights/${flight._id}`);
}

module.exports = {
    create
};