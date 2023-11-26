import React, { useState } from "react"
import './RecipeCard.css'
import { motion } from 'framer-motion'
import defaultImage from './Images/Portable_Pot_-_TotK_icon.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from '../hooks/useAuthContext'
import { IoMdHeart } from 'react-icons/io';
import axios from 'axios'

//"recipe" hook can go here, with .image, .title, .id, .hearts, .details, .ingredients
const RecipeCard = ({recipe, favorite, deletion, setDeletion, deleteCard, setDeleteCard}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isDragged, setIsDragged] = useState(false);
    const [isFavorite, setIsFavorite] = useState(favorite);
    const { user } = useAuthContext();

    // delete recipe
    const handleDelete = async () => {
      axios.delete('http://127.0.0.1:4000/api/recipes/' + user.user._id + '/' + recipe._id)
      .then(() => {
        // set deletion to true and grab the id of recipe
        setDeletion(true);
        setDeleteCard(recipe._id)
      })
      .catch((error) => {
        console.error('Error fetching recipe:', error);
      });
    }

    // favorite or unfavorite recipe
    const handleFavorite = async () => {
      // Fetch recipe data from API for user
    axios.get('http://127.0.0.1:4000/api/recipes/update-favorite/' + user.user._id + '/' + recipe._id)
      .then((response) => {
        const recievedRecipe = response.data[0]
        setIsFavorite(recievedRecipe.favorited)
      })
      .catch((error) => {
        console.error('Error fetching recipe:', error);
      });
    }
  
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
          <img src={recipe.selectedIcon || defaultImage} alt="Pie" className="recipe-image" />
          </div>
          <div>
            <p className="recipe-details">{recipe.details}</p>
          </div>
          <div className="">
          <h3 className="ingredients-title">Ingredients</h3>
            <p className="ingredients">{recipe.ingredients}</p>
          </div>
          <div>
            <h3 className="status-type">{recipe.selectedStatusEffect}</h3>
          </div>
          <div className="hearts-count">
            <p>
                {recipe.numberofHearts} <br/>
                {[...Array(recipe.numberofHearts)].map((_, index) => (
                  <IoMdHeart key={index} className="hearts-icon" />
                ))}
            </p>
          </div>
        </div>
        <div className="card-icons">
          <button className="card-icon" onClick={handleDelete}><FontAwesomeIcon className="fa-trash-icon" icon={faTrash} size="2xl" /></button>
          <button className="card-icon" onClick={handleFavorite}><FontAwesomeIcon className="fa-star-icon" icon={faStar} size="2xl" style={isFavorite ? {color: 'gold'} : {}}/></button>
        </div>
      </motion.div>
    );
  };
  
  export default RecipeCard;