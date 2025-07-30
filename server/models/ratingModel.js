const { default: mongoose } = require("mongoose");

const ratingSchema = new mongoose.Schema({
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
    comment: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        default: 5,
        required: true
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Rating', ratingSchema)