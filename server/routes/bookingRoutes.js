const express = require('express')
const { addBooking, cancelBooking, getAllMyBookings, getBooking } = require('../controllers/bookingController')




const router = express.Router()


router.get('/my-bookings', getAllMyBookings)
router.get('/:bid', getBooking)
router.post('/', addBooking)
router.put('/:bid', cancelBooking)





module.exports = router