const express = require('express')
const { addBus, updateBus, updateBooking, updateUser, getAllUsers, getAllRatings, getAllBookings } = require('../controllers/adminController')


const router = express.Router()

router.post('/bus', addBus)

router.put('/bus/:bsid', updateBus)
router.put('/booking/:bid', updateBooking)
router.put('/user/:uid', updateUser)



router.get('/view-users', getAllUsers)
router.get('/view-ratings', getAllRatings)
router.get('/view-bookings', getAllBookings)


module.exports = router