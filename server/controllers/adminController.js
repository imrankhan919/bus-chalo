const Bus = require("../models/busModel")
const User = require("../models/userModel")

const addBus = async (req, res) => {

    const {
        name,
        model,
        seats,
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
        !seats ||
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
        seats,
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
    res.send('All Bookings Here')
}

const updateBooking = async (req, res) => {
    res.send('Booking Updated')
}

const updateUser = async (req, res) => {
    res.send('User Updated')
}



module.exports = { addBus, updateBus, getAllUsers, getAllRatings, getAllBookings, updateBooking, updateUser }