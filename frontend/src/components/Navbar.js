import React, { useState } from 'react'
import { useLogout } from '../hooks/useLogout'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import RecipeForm from './RecipeForm'

const Navbar = () => {
  // brings our logout function from useLogout
  const { logout } = useLogout()
  const location = useLocation();

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
      <nav>
        <ul className='nav-list'>
          <li className={`tabs ${location.pathname === '/home' ? 'active' : ''}`}>
              <Link to ='/home'>All Recipes</Link>
          </li>
          <li className={`tabs ${location.pathname === '/favorites' ? 'active' : ''}`}>
              <Link to='/favorites'>Favorite Recipes</Link>
          </li>

            <br/>

          <li><button className='fancyButton2' onClick={() => setFormOpen(true)}>Add Recipe</button></li>
          <RecipeForm isOpen={isFormOpen} onClose={() => setFormOpen(false)} onSubmit={handleAddRecipe} />
          <li><button className='fancyButton2' onClick={handleClick}>Logout</button></li>
            
        </ul>
      </nav>
  )
}

export default Navbar
