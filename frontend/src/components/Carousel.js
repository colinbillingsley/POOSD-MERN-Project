import React, { useEffect, useState } from 'react'
import './Carousel.css'
import RecipeCard from './RecipeCard'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft, faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'

const Carousel = () => {
    const totalWidth = 320;
    const [currentIndex, setCurrentIndex] = useState(-22);
    const [recipes, setRecipes] = useState([]);
    const totalItems = recipes.length;
    const minIndex = -(totalItems/2);
    const maxIndex = totalItems/2;
    const MIN_DRAG_THRESHOLD = 150;

    const handleNext = () => {
        const nextIndex = (currentIndex + 1);
        setCurrentIndex(Math.min(nextIndex, maxIndex));
    };
    
    const handlePrev = () => {
        const prevIndex = (currentIndex - 1);
        setCurrentIndex(Math.max(prevIndex, minIndex));
    };

    const handleNext5 = () => {
        const nextIndex = (currentIndex + 5);
        setCurrentIndex(Math.min(nextIndex, maxIndex));
    };
    
    const handlePrev5 = () => {
        const prevIndex = (currentIndex - 5);
        setCurrentIndex(Math.max(prevIndex, minIndex));
    };

    const handleDrag = (event, info) => {
        const swipe = info.offset.x;
        if (Math.abs(swipe) > MIN_DRAG_THRESHOLD) {
            const moveBy = Math.round(swipe / totalWidth);
            const newIndex = currentIndex - moveBy;
            const constrainedIndex = Math.min(Math.max(newIndex, minIndex), maxIndex);

            setCurrentIndex(constrainedIndex);
        }
      };


    useEffect(() => {
    // Fetch recipe data from API
    axios.get('http://localhost:4000/api/recipes')
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
                transition = {{type: 'spring', stiffness: 55}}
                drag = 'x'
                whileDrag={{ cursor: 'grabbing' }}
                onDragEnd={handleDrag}
                dragElastic={1}
                dragMomentum={false}
            >
                
            {recipes.map((recipe) => (
                <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
            </motion.div>
            </AnimatePresence>
            <div className='button-container'>
                <button onClick={handlePrev5}><FontAwesomeIcon icon={faAnglesLeft}  size ="2xl"/></button>
                <button onClick={handlePrev}><FontAwesomeIcon icon={faAngleLeft}  size ="2xl"/></button>
                <button onClick={handleNext}><FontAwesomeIcon icon={faAngleRight}  size ="2xl"/></button>
                <button onClick={handleNext5}><FontAwesomeIcon icon={faAnglesRight}  size ="2xl"/></button>
            </div>
        </div>


    )
}

export default Carousel