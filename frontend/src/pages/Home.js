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

    // if the user has added recipes, display them
  if (recipes.length > 0) {
    return (
      <div className="bg1">
        <Navbar />
        <h2 className='title3'>All Recipes</h2>
        <h3 className='sort-heading'>Sort by status effect:</h3>
        <StatusButtons />
        <Carousel recipes={recipes}/>
        
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
        <h3 className='sort-heading'>Sort by status effect:</h3>
        <h2 className='no-recipes-title'>No Recipes Created!</h2>
        <Carousel recipes={recipes}/>
        
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