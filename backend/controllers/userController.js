const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

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
        res.status(200).json({user, token})
    } catch (error) {
        // error
        res.status(400).json({error: error.message})
    }
}

// sign up user to database
const signupUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const tempToken = jwt.sign({email}, process.env.SECRET, {expiresIn: 12000})

        // try and sign up user
        const user = await User.signup(email, password, tempToken)

        // create token
        const token = createToken(user._id)

        //create message to send to user
        const msg = {
            to: user.email,
            from: 'co145342@ucf.edu', // Use the email address or domain you verified above
            subject: 'Verify Your Account for Tears of Thanksgiving',
            text: ` Thanks for signing up with us at Tears of Thanksgiving.
                    Please copy and paste the following link to verify your account with us:
                    http://${req.headers.host}/api/user/verify/${tempToken}`,
            html: ` <h2>Thanks for signing up with us at Tears of Thanksgiving.</h2>
                    <p>Please click the following link to verify your account with us:</p>
                    <a href="http://${req.headers.host}/api/user/verify/${tempToken}">Verify Account</a>`,
        };

        try {
            // send message
            await sgMail.send(msg);
            res.status(200).json({user, token})
        } catch (error) {
            res.status(400).json({error: "Something went wrong attempting to send email"})
        }

    } catch (error) {
        // error
        res.status(400).json({error: error.message})
    }
}

const verifyUser = async (req, res) => {
    const tmpToken = req.params.token

    try {
        const update = {
            emailVerified: true,
            tempToken: null
        }

        const user = await User.findOneAndUpdate({tempToken: tmpToken}, update)
        
        if (!user) {
            throw Error('User was not found')
        }

        res.redirect('http://localhost:3000/verify')
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    loginUser,
    signupUser,
    verifyUser,
}