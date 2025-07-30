const Bus = require("../models/busModel")
const User = require("../models/userModel")
const Booking = require("../models/bookingModel")

const addBus = async (req, res) => {

    const {
        name,
        model,
        totalSeats,
        availableSeats,
        busType,
        pickupLocation,
        dropLocation,
        arrivalTime,
        departureTime,
        fare,
        registration
    } = req.body

    if (!name ||
        !model ||
        !totalSeats || !availableSeats ||
        !busType ||
        !pickupLocation ||
        !dropLocation ||
        !arrivalTime ||
        !departureTime ||
        !fare || !registration) {
        res.status(400)
        throw new Error('Please Fill All Details!!')
    }

    // Check if bus already exists
    const busExist = await Bus.findOne({ registration })

    if (busExist) {
        res.status(400)
        throw new Error('Bus Already Exists')
    }


    // Create Bus
    let bus = await Bus.create({
        name,
        model,
        totalSeats, availableSeats,
        busType,
        pickupLocation,
        dropLocation,
        arrivalTime,
        departureTime,
        fare,
        registration
    })

    if (!bus) {
        res.status(500)
        throw new Error('Bus Not Created')
    }



    res.status(201).json(bus)
}

const updateBus = async (req, res) => {

    const updatedBus = await Bus.findByIdAndUpdate(req.params.bsid, req.body, { new: true })

    if (!updatedBus) {
        res.status(500)
        throw new Error('Bus Not Updated')
    }

    res.status(200).json(updatedBus)
}

const getAllUsers = async (req, res) => {
    const users = await User.find()

    if (!users) {
        res.status(404)
        throw new Error('Uers Not Found')
    }


    res.status(200).json(users)
}

const getAllRatings = async (req, res) => {
    res.send('All Ratings Here')
}


const getAllBookings = async (req, res) => {
    const bookings = await Booking.find().populate('user').populate('bus')

    if (!bookings) {
        res.status(404)
        throw new Error('Bookings Not Found')
    }


    res.status(200).json(bookings)
}

const updateBooking = async (req, res) => {

    const booking = await Booking.findById(req.params.bid)

    if (!booking) {
        res.status(404)
        throw new Error('No Booking Found')
    }

    const bus = await Bus.findById(booking.bus)

    if (!bus) {
        res.status(404)
        throw new Error('No Booking Found')
    }

    const updatedBooking = await Booking.findByIdAndUpdate(req.params.bid, req.body, { new: true }).populate('user').populate('bus')

    if (!updatedBooking) {
        res.status(400)
        throw new Error('Booking Not Updated!')
    }

    //    Update Bus Seats
    await Bus.findByIdAndUpdate(booking.bus, { availableSeats: bus.totalSeats - booking.ticketCount }, { new: true })

    res.status(200).json(updatedBooking)


}

const updateUser = async (req, res) => {


    const user = await User.findById(req.params.uid)

    if (!user) {
        res.status(404)
        throw new Error('User Not Found!')
    }


    const updatedUser = await User.findByIdAndUpdate(req.params.uid, { isActive: false }, { new: true })

    if (!updatedUser) {
        res.status(400)
        throw new Error('User cannot be updated')
    }


    res.status(200).json(updatedUser)


}



module.exports = { addBus, updateBus, getAllUsers, getAllRatings, getAllBookings, updateBooking, updateUser }