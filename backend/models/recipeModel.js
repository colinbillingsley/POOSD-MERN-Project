const mongoose = require('mongoose')
const Schema = mongoose.Schema

// user collection model
const recipeSchema = new Schema ({
    id: Number,
    name: String,
    details: String,
    ingredients: String,
    hearts: Number,
    effect: String,
    favorited: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('recipe', recipeSchema);