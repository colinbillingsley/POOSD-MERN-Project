import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()

    // once login clicked, handle login functionality
    const handleSubmit = async (e) => {
        // prevent the page from reloading after clicking button
        e.preventDefault()

        // try and login user
        await login(email, password)
    }

  return (
    <form className='loginForm' onSubmit={handleSubmit}>
        <h2>Login</h2>
        
        <label>Email:</label>
            <input 
                type="email"
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
            />

            <label >Password:</label>
            <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
            />

            <button disabled={isLoading}>Log In</button>
            {error && <div className='error'>{error}</div> }

            <span>Don't have an account?</span>
            <Link to='/signup'><button>Create Account</button></Link>
    </form>
  )
}

export default Login
