const express = require('express')
const { getBuses, getBus } = require('../controllers/busController')

const router = express.Router()

router.get("/", getBuses)
router.get("/:bsid", getBus)


module.exports = router

