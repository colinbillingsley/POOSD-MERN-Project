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
      <h3 className='sort-heading'>Sort by status effect:</h3>
      <StatusButtons />
      <Carousel />
      
      <details>
        <popupdiv>
            <p>
              Drag to explore your recipes
          </p>
        </popupdiv>
        <summary>How it works</summary>
      </details>
    </div>
  )
}

export default Home