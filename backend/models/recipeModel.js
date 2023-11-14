const mongoose = require('mongoose')

const Schema = mongoose.Schema

// user collection model
const userSchema = new Schema ({
    id: {
        type: 'Number',
        required: true,
        unique: true
    },
    name: {
        type: 'String',
        required: true
    },
    details: {
        type: 'String',
        required: true
    },
    ingredients: {
        type: 'String',
        required: true
    }
})
