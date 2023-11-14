// RecipeForm.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import './RecipeForm.css';

//Image Imports
import bread from './Images/120px-Wheat_Bread_-_TotK_icon.png';
import applePie from './Images/120px-Apple_Pie_-_TotK_icon.png';
import fruitPie from './Images/119px-Fruit_Pie_-_TotK_icon.png';
import assortedFruits from './Images/120px-Copious_Simmered_Fruit_-_TotK_icon.png';
import turkey from './Images/120px-Deep-Fried_Bird_Roast_-_TotK_icon.png';
import vegetables from './Images/120px-Fried_Wild_Greens_-_TotK_icon.png';
import fruitcake from './Images/120px-Fruitcake_-_TotK_icon.png';
import pizza from './Images/120px-Hylian_Tomato_Pizza_-_TotK_icon.png';
import meatPie from './Images/120px-Meat_Pie_-_TotK_icon.png';
import meatStew from './Images/120px-Meat_Stew_-_TotK_icon.png';
import stuffedPumpkin from './Images/120px-Meat-Stuffed_Pumpkin_-_TotK_icon.png';
import crab from './Images/120px-Salt-Grilled_Crab_-_TotK_icon.png';
import fish from './Images/120px-Steamed_Fish_-_TotK_icon.png';
import meat from './Images/120px-Steamed_Meat_-_TotK_icon.png';
import other from './Images/Portable_Pot_-_TotK_icon.png';

const RecipeForm = ({ isOpen, onClose, onSubmit, addRecipe }) => {
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [description, setDescription] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const iconLabelMap = {
    [bread]: 'Bread',
    [applePie]: 'Apple Pie',
    [fruitPie]: 'Fruit Pie',
    [assortedFruits]: 'Assorted Fruits',
    [turkey]: 'Turkey',
    [vegetables]: 'Vegetables',
    [fruitcake]: 'Fruitcake',
    [pizza]: 'Pizza',
    [meatPie]: 'Meat Pie',
    [meatStew]: 'Meat Stew',
    [stuffedPumpkin]: 'Stuffed Pumpkin',
    [crab]: 'Crab',
    [fish]: 'Fish',
    [meat]: 'Meat',
    [other]: 'Other',
    // Add more options as needed
  };

  const handleSubmit = () => {
    // Validate and submit the form data
    const formData = {
      ingredients,
      instructions,
      description,
      selectedIcon,
    };

    onSubmit(formData);

    //addRecipe(formData);


    // Clear the form fields
    setIngredients('');
    setInstructions('');
    setDescription('');
    setSelectedIcon('');

    // Close the modal
    onClose();
  };

  const renderIconOption = (image) => (
    <div
      key={image}
      className={`custom-option ${selectedIcon === image ? 'selected' : ''}`}
      onClick={() => setSelectedIcon(image)}
    >
      <img src={image} alt={iconLabelMap[image]} className="custom-option-image" />
      <span className="icon-label">{iconLabelMap[image]}</span>
    </div>
  );

  const filteredIcons = [
    bread,
    applePie,
    fruitPie,
    assortedFruits,
    turkey,
    vegetables,
    fruitcake,
    pizza,
    meatPie,
    meatStew,
    stuffedPumpkin,
    crab,
    fish,
    meat,
    other,
    // Add more options as needed
  ].filter((image) => iconLabelMap[image].toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false} className="recipe-modal">
      <h2>Add Recipe</h2>
      <div className="recipe-form">
        <label>
          Ingredients:
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="recipe-input"
          />
        </label>

        <label>
          Instructions:
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="recipe-input"
          />
        </label>

        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="recipe-input"
          />
        </label>

        <label className="recipe-select-label">
          Select Icon:
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar"
          />
          {/* Custom dropdown with images */}
          <div className="custom-dropdown">
            <div className="icon-list">
              {filteredIcons.map((image, index) => (
                <div key={index} className="icon-list-item">
                  {renderIconOption(image)}
                </div>
              ))}
            </div>
          </div>
        </label>

        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default RecipeForm;