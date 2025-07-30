const Bus = require("../models/busModel")

const getBuses = async (req, res) => {
    const allBuses = await Bus.find()
    if (!allBuses) {
        res.status(404)
        throw new Error('Buses Not Found')
    }
    res.status(200).json(allBuses)
}

const getBus = async (req, res) => {
    const bus = await Bus.findById(req.params.bsid)
    if (!bus) {
        res.status(404)
        throw new Error('Bus Not Found')
    }
    res.status(200).json(bus)
}


module.exports = { getBuses, getBus }