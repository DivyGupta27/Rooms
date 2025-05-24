const express = require("express");
const router = express.Router();
const verifyUser = require("../middleware/userverification");
const userBooking = require("../Models/user.booking");

router.post("/booking", verifyUser, async (req, res) => {
  const { name, email, guests, check_in_date, check_out_date, message,hotel_name,room_id } = req.body;

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

module.exports = router;