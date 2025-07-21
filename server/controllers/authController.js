const User = require("../models/userModel")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {

    const { name, phone, email, password, age, gender } = req.body

    // Check If All Fileds Are Coming From Req.body

    if (!name || !phone || !email || !password || !age || !gender) {
        res.status(400)
        throw new Error('Please Fill All Details')
    }

    // Valid Phone Number
    if (phone.length !== 10) {
        res.status(400)
        throw new Error('Please Enter Valid Phone Number')
    }


    // Check If User Exists
    const phoneExist = await User.findOne({ phone: phone })
    const emailExist = await User.findOne({ email: email })

    if (phoneExist || emailExist) {
        res.status(400)
        throw new Error('User Already Exist')
    }

    // Hash Password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);



    // Create User
    const user = await User.create({ name, email, phone, password: hashedPassword, age, gender })

    if (!user) {
        res.status(400)
        throw new Error('User Account Not Created!!')
    }

    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        age: user.age,
        isActive: user.isActive,
        isAdmin: user.isAdmin,
        token: generateToken(user._id)
    })
}

const loginUser = async (req, res) => {
    const { phone, password } = req.body

    // Check If All Fileds Are Coming From Req.body

    if (!phone || !password) {
        res.status(400)
        throw new Error('Please Fill All Details')
    }

    // Check if user exist
    const user = await User.findOne({ phone })

    if (user && await bcrypt.compare(password, user.password)) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            gender: user.gender,
            age: user.age,
            isActive: user.isActive,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid Credentials')
    }


}


const generateToken = (id) => {
    let token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '10d' })
    return token
}




module.exports = { registerUser, loginUser }