const addBooking = async (req, res) => {
    res.send("Booking Added")
}

const getBooking = async (req, res) => {
    res.send("Booking Viewed")
}
const cancelBooking = async (req, res) => {
    res.send("Booking Canceled")
}
const getAllMyBookings = async (req, res) => {
    res.send("My All Bookings Here")
}

module.exports = { addBooking, getBooking, cancelBooking, getAllMyBookings }