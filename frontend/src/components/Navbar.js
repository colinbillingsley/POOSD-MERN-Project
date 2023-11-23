import React, { useState } from 'react'
import { useLogout } from '../hooks/useLogout'
import { Link } from 'react-router-dom'
import './Navbar.css'
import RecipeForm from './RecipeForm'

const Navbar = () => {
  // brings our logout function from useLogout
  const { logout } = useLogout()

  // function calls logout to logout user
  const handleClick = () => { 
      logout()
  }

  const [isFormOpen, setFormOpen] = useState(false);

  const handleAddRecipe = (formData) => {
    // Handle the submitted form data (e.g., send it to the server)
    console.log(formData);
  };

  // this will be our navbar
  return (
     /*<span>Tears of Thanksgiving</span>
        <span>{`Hello ${user.email}`}</span>*/
      <nav className='navbar'>
        <ul className='nav-list'>
            <li><Link to ='/home'>All Recipes</Link></li>
            <li><Link to='/favorited-recipes'>Favorited Recipes</Link></li>
            <li><button onClick={() => setFormOpen(true)}>Add Recipe</button></li>
              <RecipeForm isOpen={isFormOpen} onClose={() => setFormOpen(false)} onSubmit={handleAddRecipe} />
            <li><button onClick={handleClick}>Logout</button></li>
        </ul>
      </nav>
  )
}

export default Navbar
