import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
  // NODE_OPTIONS="--openssl-legacy-provider" npm run build


// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Favorites from './pages/Favorites'
import { useAuthContext } from './hooks/useAuthContext'
import Verify from './pages/Verify'

function App() {
  const { user } = useAuthContext()

  
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route 
                path="/home"
                element={user ? <Home /> : <Navigate to='/login' />}
              />
            <Route 
              path="/favorites"
              element={user ? <Favorites /> : <Navigate to='/login' />}
            />
            <Route 
              path="/login"
              element={!user || !(user.user.emailVerified) ? <Login /> : <Navigate to='/home' />}
            />
            <Route
              path="/signup"
              element={!user || !(user.user.emailVerified) ? <Signup /> : <Navigate to='/login' />}
            />
            <Route
              path="/verify"
              element={<Verify />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
