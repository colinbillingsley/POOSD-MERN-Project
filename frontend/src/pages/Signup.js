import React, { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, isLoading, error } = useSignup()

    // handle signup once clicked
    const handleSubmit = async (e) => {
        // prevent page from reloading
        e.preventDefault()

        // try and sign up the user
        await signup(email, password)
    }

  return (
    <div className='centered-box'>
    <form className='signupForm' onSubmit={handleSubmit}>
        <h2>Signup</h2>
        
        <label>Email:</label>
        <input 
            type="email"
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
        />

        <label>Password:</label>
        <input 
            type="password"
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
        />

        <button disabled={isLoading}>Sign Up</button>
        {error && <div className='error'>{error}</div> }
    </form>
    </div>
  )
}

export default Signup
