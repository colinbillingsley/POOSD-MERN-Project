import React, { useState, useEffect } from 'react'
import './Carousel.css'
import RecipeCard from './RecipeCard'
import {motion, AnimatePresence, useAnimation, useMotionValue, useTransform} from 'framer-motion'

const Carousel = () => {
    const cardWidth = 300;
    const gap = 20;
    const totalWidth = cardWidth + gap;
    const controls = useAnimation();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        const nextIndex = (currentIndex + 1);
        setCurrentIndex(nextIndex);
    };
    
    const handlePrev = () => {
        const prevIndex = (currentIndex - 1);
        setCurrentIndex(prevIndex);
    };

    const dragX = useMotionValue(0);
    const handleDrag = (event, info) => {
        const swipe = info.offset.x;
       const moveBy = Math.round(swipe / totalWidth);
       setCurrentIndex(prev => prev - moveBy);
      };

    const scaleCard = (index) => {
        return index === currentIndex ? 1.1 : 1;
    }
      

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
                dragConstraints = {{left: 0, right: 0}}
                onDragEnd={handleDrag}
                dragElastic={1}
                dragMomentum={false}
            >
                
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                
            </motion.div>
            </AnimatePresence>
            <div className='nextButton'>
                <button onClick={handlePrev}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>


    )
}

export default Carousel