const express = require("express");
const router = express.Router();
const verifyUser = require("../middleware/userverification");
const userBooking = require("../Models/user.booking");
const User = require('../Models/user.model')
const allRooms = require('../../src/Booking.rooms.json')

router.post("/booking", verifyUser, async (req, res) => {
  const { name, email, guests, check_in_date, check_out_date, message, hotel_name, room_id } = req.body;

  if (!name || !email || !guests || !check_in_date || !check_out_date) {
    return res.status(400).send({
      success: false,
      message: "All required fields must be provided",
    });
  }

  const bookingData = {
    name,
    email,
    guests,
    check_in_date,
    check_out_date,
    message,
    hotel_name,
    room_id,
    createdby: req.user,
  };

  try {
    const booking = await userBooking.create(bookingData);
    res.status(201).send({
      success: true,
      message: "Booking successfully created",
      booking,
    });
  } catch (error) {
    console.error("Booking creation error:", error);
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
});

router.get('/getUserBooking', verifyUser, async (req, res) => {
  try {
    const allBooking = await userBooking
      .find({ createdby: req.user }) 
      .populate("createdby"); 

    res.status(200).json({
      success: true,
      results: allBooking.length,
      message: "All bookings fetched successfully",
      booking: allBooking,
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
})


router.get('/admindata', async (req, res) => {
  try {
    const allBooking = await userBooking.find({}).populate("createdby")
    const allUser = await User.find({})

    res.status(200).send({
      success: true,
      allBooking: allBooking,
      allBooklen: allBooking.length,
      allUserlen: allUser.length,
      allRooms: allRooms.length
    })
  }
  catch (error) {
    res.status(500).send({
      success: false,
      message: error
    })
  }
})





module.exports = router;