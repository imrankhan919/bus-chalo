const express = require('express')
const { getRatings, addRating } = require('../controllers/ratingController')


const router = express.Router()

router.get("/:bsid", getRatings)
router.post("/:bsid", addRating)


module.exports = router
