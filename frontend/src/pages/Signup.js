import React, { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import { Link, useNavigate } from 'react-router-dom'


const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, isLoading, error } = useSignup()
    const navigate = useNavigate()

    // handle signup once clicked
    const handleSubmit = async (e) => {
        // prevent page from reloading
        e.preventDefault()

        // try and sign up the user
        if (await signup(email, password)) {
            navigate('/login')
        }
    }

  return (
    <div className='bg'>
        <div className='centered-box'>
        <form className='signupForm' onSubmit={handleSubmit}>
            <h1 className='title'>Signup</h1>
            
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

            <button className='fancyButton btnEdit1' disabled={isLoading}>Sign Up</button>
            {error && <div className='error'>{error}</div> }

            <Link to='/login' style={{ textDecoration: 'none' }}><button className='fancyButton btnEdit1'>Back</button></Link>
        </form>
        </div>
    </div>
  )
}

export default Signup
