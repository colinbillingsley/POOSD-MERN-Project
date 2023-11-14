import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import './Navbar.css'

const Navbar = () => {
  // holds our user information
  const { user } = useAuthContext()
  // brings our logout function from useLogout
  const { logout } = useLogout()

  // function calls logout to logout user
  const handleClick = () => { 
      logout()
  }

  // this will be our navbar
  return (
     /*<span>Tears of Thanksgiving</span>
        <span>{`Hello ${user.email}`}</span>*/
      <nav className='navbar'>
        <ul className='nav-list'>
            <li>All Recipes</li>
            <li>Saved Recipes</li>
            <li>Sort Recipes</li>
            <li><button onClick={handleClick}>Logout</button></li>
        </ul>
      </nav>
  )
}

export default Navbar
