import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
  // NODE_OPTIONS="--openssl-legacy-provider" npm run build


// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { user } = useAuthContext()
  
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
          <Route 
              path="/"
              element={user ? <Home /> : <Navigate to='/login' />}
            />
            <Route 
              path="/home"
              element={user ? <Home /> : <Navigate to='/login' />}
            />
            <Route 
              path="/login"
              element={!user ? <Login /> : <Navigate to='/home' />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to='/login' />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
