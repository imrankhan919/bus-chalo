const express = require('express')
const colors = require('colors')
const connectDB = require('./config/dbConfig')
const errorHandler = require('./middleware/errorHandler')
require('dotenv').config()


const app = express()
const PORT = process.env.PORT || 5000


// DB Connection
connectDB()

// Body-Parser
app.use(express.json())
app.use(express.urlencoded())



// Default Route
app.get("/", (req, res) => {
    res.json({
        msg: "WELCOME TO CHALO APP API 1.0"
    })
})


// Auth Routes
app.use("/api/auth", require("./routes/authRoutes"))

// Admin Routes
app.use("/api/admin", require("./routes/adminRoutes"))

// Booking Routes
app.use("/api/booking", require("./routes/bookingRoutes"))

// Bus Routes
app.use("/api/bus", require("./routes/busRoutes"))

// Rating Routes
app.use("/api/rating", require("./routes/ratingRoutes"))


app.listen(PORT, () => { console.log(`SERVER IS RUNNING AT PORT : ${PORT}`.bgBlue.black) })

// Error Handler
app.use(errorHandler)