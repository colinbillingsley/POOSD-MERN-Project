import React, { useEffect, useState } from 'react'
import './Carousel.css'
import RecipeCard from './RecipeCard'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft, faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'

const Carousel = () => {
    const cardWidth = 300;
    const gap = 20;
    const totalWidth = cardWidth + gap;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [recipes, setRecipes] = useState([]);

    const handleNext = () => {
        const nextIndex = (currentIndex + 1);
        setCurrentIndex(nextIndex);
    };
    
    const handlePrev = () => {
        const prevIndex = (currentIndex - 1);
        setCurrentIndex(prevIndex);
    };

    const handleNext5 = () => {
        const nextIndex = (currentIndex + 5);
        setCurrentIndex(nextIndex);
    };
    
    const handlePrev5 = () => {
        const prevIndex = (currentIndex - 5);
        setCurrentIndex(prevIndex);
    };

    const handleDrag = (event, info) => {
        const swipe = info.offset.x;
       const moveBy = Math.round(swipe / totalWidth);
       setCurrentIndex(prev => prev - moveBy);
      };

    useEffect(() => {
    // Fetch recipe data from API
    axios.get('/api/recipes')
        .then((response) => {
        setRecipes(response.data);
        })
        .catch((error) => {
        console.error('Error fetching recipes:', error);
        });
    }, []);

    // Fetch the recipes from the API or define them for recipe prop
    return (
        <div >
            <AnimatePresence>
            <motion.div 
                className='carousel-container'
                initial = {{ x:0 }}
                animate= {{ x: -currentIndex*totalWidth}}
                transition = {{type: 'spring', stiffness: 50}}
                drag = 'x'
                whileDrag={{ cursor: 'grabbing' }}
                dragConstraints = {{left: 0, right: 0}}
                onDragEnd={handleDrag}
                dragElastic={1}
                dragMomentum={false}
            >
                
            {recipes.map((recipe) => (
                <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
                
            </motion.div>
            </AnimatePresence>
            <div className='nextButton'>
                <button onClick={handlePrev5}><FontAwesomeIcon icon={faAnglesLeft}  size ="2xl"/></button>
                <button onClick={handlePrev}><FontAwesomeIcon icon={faAngleLeft}  size ="2xl"/></button>
                <button onClick={handleNext}><FontAwesomeIcon icon={faAngleRight}  size ="2xl"/></button>
                <button onClick={handleNext5}><FontAwesomeIcon icon={faAnglesRight}  size ="2xl"/></button>
            </div>
        </div>


    )
}

export default Carousel