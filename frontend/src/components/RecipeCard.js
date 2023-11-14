import React from "react"
import './RecipeCard.css'
import applePie from "./applePie.png"

//"recipe" hook can go here, with .image, .title, .id, .hearts, .details, .ingredients
const RecipeCard = () => {
    return (
      <div className="recipe-card">
        <span className="recipe-id">131</span>
        <h2 className="recipe-title">Apple Pie</h2>
        <img src={applePie} alt="Pie" className="recipe-image" />
        <div className="recipe-details">
          <p>The cripsy, flaky pie crust and sweet apples are a match made in heaven.</p>
        </div>
        <div className="">
          <h3 className="ingredients-title">Ingredients</h3>
        </div>
      </div>
    );
  };
  
  export default RecipeCard;