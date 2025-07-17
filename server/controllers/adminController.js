const addBus = async (req, res) => {
    res.send('Bus Added!')
}

const updateBus = async (req, res) => {
    res.send('Bus Edited!')
}

const getAllUsers = async (req, res) => {
    res.send('All Users Here')
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