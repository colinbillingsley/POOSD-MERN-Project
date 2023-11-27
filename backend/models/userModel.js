const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema

// user collection model
const userSchema = new Schema ({
    email: {
        type: 'String',
        required: true,
        unique: true
    },
    password: {
        type: 'String',
        required: true
    },
    tempToken: {
        type: 'String',
        required: true,
    },
    emailVerified: {
        type: 'Boolean',
        required: true,
        default: false
    }
})

// static login method
userSchema.statics.login = async function(email, password) {
    // validation
    if (!email || !password) {
        throw Error('All fields are required')
    }
    
    // get user info from email passed
    const user = await this.findOne({email})
    // check if email is in database
    if (!user) {
        throw Error('Email not found')
    }

    // check if user has been verified
    const verified = user.emailVerified
    if (!verified) {
        throw Error('Email has not been verified.')
    }

    // check if password matches with email
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error('Incorrect password')
    }

    return user
}

// static signup method
userSchema.statics.signup = async function(email, password, tempToken) {

    // validation
    if (!email || !password) {
        throw Error('All fields are required')
    }

    if (!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }

    const exists = await this.findOne({ email })
    // check if email exists already in database
    if (exists) {
        throw Error('Email already exists')
    }

    // create salt value
    const salt = await bcrypt.genSalt(10)

    // hash password with salt
    const hash = await bcrypt.hash(password, salt)

    // send user info to database
    const user = await this.create({email, password: hash, tempToken})

    return user
}

module.exports = mongoose.model('User', userSchema)