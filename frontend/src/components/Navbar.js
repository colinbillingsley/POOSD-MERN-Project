import React, { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import './Navbar.css'
import RecipeForm from './RecipeForm'

const Navbar = () => {
  // holds our user information
  const { user } = useAuthContext()
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
            <li>All Recipes</li>
            <li>Saved Recipes</li>
            <li>Sort Recipes</li>
            <li><button onClick={() => setFormOpen(true)}>Add Recipe</button></li>
              <RecipeForm isOpen={isFormOpen} onClose={() => setFormOpen(false)} onSubmit={handleAddRecipe} />
            <li><button onClick={handleClick}>Logout</button></li>
        </ul>
      </nav>
  )
}

export default Navbar
