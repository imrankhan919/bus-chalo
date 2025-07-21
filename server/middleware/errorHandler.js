const errorHandler = (err, req, res, next) => {
    let resCode = res.statusCode <= 200 ? 500 : res.statusCode
    res.status(resCode)
    res.json({
        msg: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack
    })

}


module.exports = errorHandler