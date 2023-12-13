const mongoose = require('mongoose');

const { Schema } = mongoose;

const flightSchema = new Schema({
    airline: { 
        type: String,
        enum: [ 'American', 'Delta', 'Southwest', 'United', 'Allegiant' ]
    },
    airport: {
        type: String,
        default: 'ORD',
        enum: [ 'AUS', 'DTW', 'DEN', 'LAX', 'ORD', 'SAN' ]
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            let d = new Date();
            d.setFullYear(d.getFullYear() + 1);
            return d;
        }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);