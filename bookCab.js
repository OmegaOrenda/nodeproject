const router = require("express").Router();
let Cab = require("../models/cab.model");
let User = require("../models/user.model");
let Booking = require("../models/booking.model");

//Book a Cab
router.route('/addBooking').post(async (req, res) =>{

    var user = await User.findOne({ email: req.body.email});
    const userId = user._id;
    const userLocation = user.location;
    var cabId = '' ;
    var cabLocation ;
    const threshold = 5;
    var distance = 0;
    var availableCabs = await Cab.find({});
    availableCabs = [];
    var cabs = await Cab.find({});
    for(var i=0; i<cabs.length;i++){
        distance = cabs[i].location % user.location ;
        if(distance < threshold){
            cabId=cabs[i]._id;
            cabLocation= cabs[i].location;
            const newBooking = new Booking({userId, cabId, userLocation, cabLocation, totalAmount});
            newBooking.save()
              .then(() => res.end(JSON.stringify({"success" : true, "code" : 201, "message" : "Booking Added Successfully"})))
              .catch(err => res.end(JSON.stringify({"success" : false, "code" : 400, "message" : err.message})));

        }

    }
}); 

router.route('/getBooking').post(async (req, res) =>{

    var user = await User.findOne({ email: req.body.email});
    const userId = user._id;
    var sortedBookings = await Booking.find({});
    sortedBookings = [];
    var bookings = await Booking.find({});
    for (var i=0; i<bookings.length;i++) {
      if(bookings[i].userId == userId){
            sortedBookings =sortedBookings+ bookings[i];
      }
    }
    if (sortedOrder) {
      res.status(200).json({ message: "Booking details :  "+ sortedBookings });
      
    } else {
      res.status(401).json({ error: "No Booking exist" });
    }
});

router.route('/getBooking').post(async (req, res) =>{

});

module.exports = router;