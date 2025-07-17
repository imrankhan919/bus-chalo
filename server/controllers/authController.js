const registerUser = async (req, res) => {
    res.send('User Registered!!')
}

const loginUser = async (req, res) => {
    res.send('User Logined!!')
}


module.exports = { registerUser, loginUser }