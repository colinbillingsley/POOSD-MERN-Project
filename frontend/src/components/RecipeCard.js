import React from "react"
import './RecipeCard.css'
import applePie from "./applePie.png"
import { motion } from 'framer-motion'

//"recipe" hook can go here, with .image, .title, .id, .hearts, .details, .ingredients
const RecipeCard = ({recipe}) => {
    return (
      <motion.div
        whileHover={{scale: 1.11}}
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
          </div>
        </div>
      </motion.div>
    );
  };
  
  export default RecipeCard;