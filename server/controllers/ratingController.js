const getRatings = async (req, res) => {
    res.send("All Ratings")
}

const addRating = async (req, res) => {
    res.send("Rating Added")
}

module.exports = { getRatings, addRating }