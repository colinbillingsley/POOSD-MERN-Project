import React, { useState, useEffect } from 'react'
import './Carousel.css'
import RecipeCard from './RecipeCard'
import {motion, AnimatePresence} from 'framer-motion'

const Carousel = () => {

    // Fetch the recipes from the API or define them for recipe prop
    return (
        <div className='carousel-container'>
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
        </div>
    )
}

export default Carousel