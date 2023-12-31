import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'
import './Login.css'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()
    const navigate = useNavigate()

    // once login clicked, handle login functionality
    const handleSubmit = async (e) => {
        // prevent the page from reloading after clicking button
        e.preventDefault()

        // try and login user
        if(await login(email, password)) {
            navigate('/home')
        }
    }

  return (
    <div className='bg'>
        <div className='centered-box'>
        <form className='login-titles' onSubmit={handleSubmit}>
            <h1 className='title'>Login</h1>
            
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

                <button className='fancyButton btnEdit2' disabled={isLoading}>Log In</button>
                {error && <div className='error'>{error}</div> }

                <h2 className='title2'>Don't have an account?</h2>
                <Link to='/signup' style={{ textDecoration: 'none' }}><button className='fancyButton'>Create Account</button></Link>
        </form>
        </div>
    </div>
  )
}

export default Login
