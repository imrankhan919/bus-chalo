const getBuses = async (req, res) => {
    res.send("View Buses")
}

const getBus = async (req, res) => {
    res.send("View Bus")
}


module.exports = { getBuses, getBus }