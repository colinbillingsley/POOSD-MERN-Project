import React, { useState } from "react"
import './RecipeCard.css'
import applePie from "./applePie.png"
import { motion } from 'framer-motion'

//"recipe" hook can go here, with .image, .title, .id, .hearts, .details, .ingredients
const RecipeCard = ({recipe}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isDragged, setIsDragged] = useState(false);
  
    return (
      <motion.div
        whileHover={!isDragged && { scale: 1.1 }} // Apply the scale animation only if not dragged
        animate={{ scale: (isHovered || isDragged) ? 1.1 : 1 }} // Scale up if hovered or dragged, otherwise, scale to 1
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onDragStart={() => setIsDragged(true)}
        onDragEnd={() => setIsDragged(false)}
        >
        <div className="recipe-card">
          <span className="recipe-id">{recipe.id}</span>
          <h2 className="recipe-title">{recipe.name}</h2>
          <div className="img-container">
            <img src={applePie} alt="Pie" className="recipe-image" />
          </div>
          <div>
            <p className="recipe-details">{recipe.details}</p>
          </div>
          <div className="">
            <h3 className="ingredients-title">Ingredients</h3>
            <p className="ingredients">{recipe.ingredients}</p>
          </div>
        </div>
      </motion.div>
    );
  };
  
  export default RecipeCard;