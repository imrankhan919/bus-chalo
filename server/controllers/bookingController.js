const Booking = require("../models/bookingModel")
const Bus = require("../models/busModel")

const addBooking = async (req, res) => {


    if (!req.body || !req.body.ticketCount) {
        res.status(400)
        throw new Error('Please Enter Tickets Count!')
    }


    // Check if seats available
    const bus = await Bus.findById(req.params.bsid)

    if (!bus) {
        res.status(404)
        throw new Error('Bus Not Found!')
    }

    if (bus.seats === 0) {
        res.status(400)
        throw new Error('Seats not available')
    }


    //    Book Seats
    const booking = await Booking.create({
        user: req.user._id,
        bus: bus._id,
        ticketCount: req.body.ticketCount
    })

    if (!booking) {
        res.status(500)
        throw new Error('Booking Failed!')
    }

    //    Update Bus Seats
    await Bus.findByIdAndUpdate(req.params.bsid, { seats: bus.seats - ticketCount }, { new: true })

    res.status(201).json(booking)



}

const getBooking = async (req, res) => {

    const booking = await Booking.findById(req.params.bid)

    if (!booking) {
        res.status(404)
        throw new Error('Booking Not Found!!')
    }

    res.status(200).json(booking)

}
const cancelBooking = async (req, res) => {
    res.send("Booking Canceled")
}
const getAllMyBookings = async (req, res) => {
    res.send("My All Bookings Here")
}

module.exports = { addBooking, getBooking, cancelBooking, getAllMyBookings }