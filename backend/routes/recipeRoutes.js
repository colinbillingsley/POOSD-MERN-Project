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

  router.get('/favorites/:id', async (req, res) => {
    const { id } = req.params

    try {
      const recipes = await Recipe.find({user_id: id, favorited: true})
      if (recipes.length === 0) {
        res.json({mssg:'no recipes favorited'});
      } else {
        res.status(200).json(recipes);
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })

  router.get('/update-favorite/:id/:recipe', async (req, res) => {
    const { id, recipe } = req.params;

    try {
      // find the recipe that the user clicked on
      const recipes = await Recipe.find({user_id: id, _id: recipe});

      // no recipe found in db
      if (!recipes) {
        res.status(400).json({error:'no recipe found'})
      }

      // if not favorited, set to true
      if (recipes[0].favorited === false) {
        recipes[0].favorited = true;
        recipes[0].save();
      } 
      // if favorited, set to false
      else {
        recipes[0].favorited = false;
        recipes[0].save();
      }
        res.status(200).json(recipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })

  router.delete('/:id/:recipe', async (req, res) => {
    const { id, recipe } = req.params;

    try {
      // find the recipe that the user clicked on
      const recipes = await Recipe.findOneAndDelete({user_id: id, _id: recipe});

      // no recipe found in db
      if (!recipes) {
        return res.status(400).json({error: 'no recipe found'})
      }

        res.status(200).json(recipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })

module.exports = router;