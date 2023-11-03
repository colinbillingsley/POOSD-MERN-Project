const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '1d' })
}

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        // try and login user
        const user = await User.login(email, password)

        // create token
        const token = createToken(user._id)

        // success
        res.status(200).json({email, token})
    } catch (error) {
        // error
        res.status(400).json({error: error.message})
    }
}

// sign up user to database
const signupUser = async (req, res) => {
    const { email, password } = req.body

    try {
        // try and sign up user
        const user = await User.signup(email, password)

        // create token
        const token = createToken(user._id)

        // success
        res.status(200).json({email, token})
    } catch (error) {
        // error
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    loginUser,
    signupUser
}