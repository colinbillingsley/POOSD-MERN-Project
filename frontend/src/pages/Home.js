import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import React from 'react'
import './Home.css'

// home page we transition to after login
const Home = () => {

  return (
    <div className="bg1">
      <Navbar />
      <h3>All Recipes</h3>
      <Carousel />
    </div>
  )
}

export default Home