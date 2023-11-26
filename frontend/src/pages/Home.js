import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import React from 'react'
import './Home.css'
import StatusButtons from '../components/StatusButtons'
import { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import axios from 'axios'

// home page we transition to after login
const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedStatusEffect, setSelectedStatusEffect] = useState('');
  const [deletion, setDeletion] = useState(false)
  const [deleteCard, setDeleteCard] = useState(null)
  const { user } = useAuthContext();

  useEffect(() => {
    // Fetch recipe data from API for user
    axios.get('http://127.0.0.1:4000/api/recipes/' + user.user._id)
        .then((response) => {
        setRecipes(response.data);
        })
        .catch((error) => {
        console.error('Error fetching recipes:', error);
        });
    }, [user.user._id]);

    useEffect(() => {
      // Filter recipes based on the selected status effect
      if (selectedStatusEffect) {
        const filtered = recipes.filter(recipe => recipe.selectedStatusEffect === selectedStatusEffect);
        setFilteredRecipes(filtered);
      } else {
        setFilteredRecipes(recipes);
      }
    }, [selectedStatusEffect, recipes]);

    const resetFilters = () => {
      // Clear the selected status effect to reset filters
      setSelectedStatusEffect('');
    };

    // if we are deleting a recipe
    if (deletion) {
      // grab all recipes except the one we are deleting
      const afterDeletion = recipes.filter((recipe) => recipe._id !== deleteCard)
      // set the recipes to new set of recipes after deletion
      setRecipes(afterDeletion);
      // reset the deletion and deleteCard
      setDeletion(false)
      setDeleteCard(null)
    }

    // if the user has added recipes, display them
  if (recipes.length > 0) {
    return (
      <div className="bg1">
        <Navbar />
        <h2 className='title3'>All Recipes</h2>
        <h3 className='sort-heading'>Sort by status effect:</h3>
        <StatusButtons setSelectedStatusEffect={setSelectedStatusEffect} resetFilters={resetFilters}/>
        <Carousel recipes={filteredRecipes} deletion={deletion} setDeletion={setDeletion} deleteCard={deleteCard} setDeleteCard={setDeleteCard}/>
        
        <details>
          <popupdiv>
              <p>
                Drag to explore your recipes
            </p>
          </popupdiv>
          <summary>How it works</summary>
        </details>
      </div>
    )
  } 
  // if the user has not added recipes, display no recipes added
  else {

    return (
      <div className="bg1">
        <Navbar />
        <h2 className='title3'>All Recipes</h2>
        <h2 className='no-recipes-title'>No Recipes Created!</h2>
        
        <details>
          <popupdiv>
              <p>
                Drag to explore your recipes
            </p>
          </popupdiv>
          <summary>How it works</summary>
        </details>
      </div>
    )
  }
}

export default Home