const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cabs = new Schema({
    driverName: {
        type: String,
        required: true,
        minlength: 2
    },
    location:{
        type: Number,
        required: true
    },
    available:{
        type: Boolean,
        required: true
    },
    number:{
        type: String,
        required: true

    }
},
{
    timestamps: true,
  });

  const Cab = mongoose.model('Cabs', cabs);

  module.exports = Cab;