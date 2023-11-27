const mongoose = require('mongoose')
const Schema = mongoose.Schema

// recipe collection model
const recipeSchema = new Schema ({
    id: Number,
    name: String,
    details: String,
    ingredients: String,
    selectedStatusEffect: {
        type: String,
        minimize: false,
    },
    numberofHearts: Number,
    selectedIcon: String,
    favorited: {
        type: Boolean,
        default: false,
    },
    user_id: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model('recipe', recipeSchema);