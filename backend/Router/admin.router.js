const express = require("express");
const router = express.Router();
const userBooking = require("../Models/user.booking");
const User = require('../Models/user.model')
const allRooms = require('../../src/Booking.rooms.json')
const adminVerification =require('../middleware/adminVerification')

router.get('/admindata',adminVerification, async (req, res) => {
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

router.delete('/delete/:id', adminVerification, async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBooking = await userBooking.findByIdAndDelete(id);

    if (!deletedBooking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    res.status(200).json({ success: true, message: 'Booking deleted successfully' });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ success: false, message: 'Failed to delete booking' });
  }
});




module.exports = router;
