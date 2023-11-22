const express = require('express')

// controller functions
const { loginUser, signupUser, verifyUser } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// verify email
router.get('/verify/:token', verifyUser)

module.exports = router