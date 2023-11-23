const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipeModel.js')

// Define a route to fetch all recipes created by the user
router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const recipes = await Recipe.find({user_id: id})
    res.status(200).json(recipes)
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.route("/").post((req, res) => {
    const name = req.body.name;
    const ingredients = req.body.ingredients;
    const details = req.body.details;
    const selectedIcon = req.body.selectedIcon;
    const user_id = req.body.user_id

    const newRecipe = new Recipe({
        name,
        details,
        ingredients,
        details,
        selectedIcon,
        user_id
    });

    newRecipe.save();
  })

module.exports = router;