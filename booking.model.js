const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookings = new Schema({
    userId: {
        type: String,
        required: true
    },
    cabId:{
        type: String,
        required: true
    },
    userLocation:{
        type: Number,
        required: true
    },
    cabLocation:{
        type: Number,
        requires: true
    },
    totalAmount:{
        type: Number,
        requires: true
    }
    
},
{
    timestamps: true,

});

const Booking = mongoose.model('Bookings', bookings);

module.exports = Booking;