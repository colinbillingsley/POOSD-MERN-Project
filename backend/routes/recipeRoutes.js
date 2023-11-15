const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipeModel.js')

// Define a route to fetch recipes
router.get('/', async (req, res) => {
  try {
    // Logic to fetch recipe data
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;