import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

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
    <header>
        <span>Tears of Thanksgiving</span>
        <span>{`Hello ${user.email}`}</span>
        <button onClick={handleClick}>Logout</button>
    </header>
  )
}

export default Navbar
