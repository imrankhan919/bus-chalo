const { mongoose } = require("mongoose");

const bookingSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bus: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bus',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'booked', 'cancelled', 'completed'],
        default: 'pending',
        required: true
    },
    ticketCount: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Booking', bookingSchema)