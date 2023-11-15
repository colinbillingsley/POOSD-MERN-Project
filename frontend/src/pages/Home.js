import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import React from 'react'
import './Home.css'
import StatusButtons from '../components/StatusButtons'

// home page we transition to after login
const Home = () => {

  return (
    <div className="bg1">
      <Navbar />
      <h2 className='title3'>All Recipes</h2>
      <StatusButtons />
      <Carousel />
    </div>
  )
}

export default Home