const Rating = require("../models/ratingModel")


const getRatings = async (req, res) => {

    const ratings = await Rating.find({ bus: req.params.bsid }).populate('user').populate('bus')

    if (!ratings) {
        res.status(404)
        throw new Error('Ratings Not Found!!')
    }

    res.status(200).json(ratings)


}

const addRating = async (req, res) => {
    const { comment, rate } = req.body

    if (!comment || !rate) {
        res.status(400)
        throw new Error('Please Fill All Details!!')
    }

    const newRating = await Rating.create({ user: req.user._id, bus: req.params.bsid, comment, rate })

    if (!newRating) {
        res.status(400)
        throw new Error('Rating Not Created!!!')
    }

    res.status(201).json(newRating)

}

module.exports = { getRatings, addRating }