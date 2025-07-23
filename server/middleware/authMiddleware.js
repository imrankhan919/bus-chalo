const jwt = require('jsonwebtoken')
const User = require('../models/userModel')


const protect = async (req, res, next) => {

    let token

    try {
        // Check If Token Is Coming With Req
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            // Get Token
            token = req.headers.authorization.split(" ")[1]
            // Validate Token
            let decoded = jwt.verify(token, process.env.JWT_SECRET);
            // Check if user exist
            const user = await User.findById(decoded.id).select("-password")
            // Stored User Into Req Object
            req.user = user
            next()
        } else {
            res.status(401)
            throw new Error('Unauthorised Access No Token Found!!')
        }
    } catch (error) {
        res.status(401)
        throw new Error('Unauthorised Access')
    }




}


module.exports = protect