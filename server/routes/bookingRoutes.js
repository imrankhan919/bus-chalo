const express = require('express')
const { addBooking, cancelBooking, getAllMyBookings, getBooking } = require('../controllers/bookingController')
const protect = require("../middleware/authMiddleware")



const router = express.Router()


router.get('/my-bookings', protect, getAllMyBookings)
router.get('/:bid', protect, getBooking)
router.post('/:bsid', protect, addBooking)
router.put('/:bid', protect, cancelBooking)





module.exports = router