// RecipeForm.js
import { useAuthContext } from '../hooks/useAuthContext'
import { IoMdHeart } from 'react-icons/io';
import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from "axios";
import './RecipeForm.css';
import './StatusButtons.css'
import { motion } from 'framer-motion'

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

const RecipeForm = ({ isOpen, onClose, onSubmit }) => {
  const [name, setname] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [details, setDetails] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedStatusEffect, setSelectedStatusEffect] = useState('');
  const [numberofHearts, setNumberofHearts] = useState(0);
  const { user } = useAuthContext();
  const user_id = user.user._id

   const handleButtonClick = (selectedStatusEffect) => {
        setSelectedStatusEffect(selectedStatusEffect);
    };

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
    [stuffedPumpkin]: 'Pumpkin',
    [crab]: 'Crab',
    [fish]: 'Fish',
    [meat]: 'Meat',
    [other]: 'Other',
    // Add more options as needed
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !ingredients || !details || !selectedIcon) {
      // Handle the case where a required field is empty (you can show an error message or prevent form submission)
      setErrorMessage('All fields are required');
      return;
    }

    // Clear any previous error messages
    setErrorMessage('');

    // Validate and submit the form data
    const formData = {
      name,
      ingredients,
      details,
      selectedIcon,
      selectedStatusEffect,
      numberofHearts,
      user_id
    };

    const newRecipe = {
      name: name,
      ingredients: ingredients,
      details: details,
      selectedIcon: selectedIcon,
      selectedStatusEffect: selectedStatusEffect,
      numberofHearts: numberofHearts,
      user_id: user_id
    }

    // Handle successful submission, if needed
    onSubmit(formData);
    console.log('Form submitted successfully:', formData);

    // Clear the form fields
    setname('');
    setIngredients('');
    setDetails('');
    setSelectedIcon('');
    setSelectedStatusEffect('');
    setSearchQuery('');
    
    // Close the modal
    onClose();
    // Refresh the page
    window.location.reload();

    axios.post('http://127.0.0.1:4000/api/recipes/', newRecipe)
      .then(response => {
        console.log('Form submitted successfully:', newRecipe);
      })
      .catch(error => {
        // Handle submission error, if needed
        console.error('Error submitting form:', error);
        // Set an error message to display to the user
        setErrorMessage('Error submitting form. Please try again.');
      });
  };

  const renderIconOption = (image) => (
    <div
      key={image}
      className={`custom-option ${selectedIcon === image ? 'selected' : ''}`}
      onClick={() => {
        setSelectedIcon(image);
      }}
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
      <div className="recipe-form">
      <label>
          Recipe Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="recipe-input"
            required={true}
          />
        </label>
        <label>
          Ingredients:
          <input
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="recipe-input"
            required={true}
          />
        </label>
        <label>
          Description:
          <input
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="recipe-input"
            required={true}
          />
        </label>
        <label>
          <div className="container">
              <div className="buttonBar">
                  <motion.button
                      whileHover = {{scale:1.3, y: -5}}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Adjust spring animation parameters
                      onClick={() => handleButtonClick("Hearty")}
                  >
                      Hearty
                  </motion.button>

                  <motion.button
                      whileHover = {{scale:1.3, y: -5}}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Adjust spring animation parameters
                      onClick={() => handleButtonClick("Chilly")}
                  >
                      Chilly
                  </motion.button>

                  <motion.button
                      whileHover = {{scale:1.3, y: -5}}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Adjust spring animation parameters
                      onClick={() => handleButtonClick("Hasty")}
                  >
                      Hasty
                  </motion.button>
                  <motion.button

                      whileHover = {{scale:1.3, y: -5}}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Adjust spring animation parameters
                      onClick={() => handleButtonClick("Sneaky")}
                  >
                      Sneaky
                  </motion.button>
              </div>
          </div>
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
        <label>
          Number of Hearts (Rating):
          <div className="hearts-slider-container">
            {[...Array(10)].map((_, index) => (
              <IoMdHeart
                key={index}
                className={`heart-icon ${
                  index < numberofHearts ? 'selected' : ''
                }`}
                onMouseEnter={() => setNumberofHearts(index + 1)}
                onClick={() => setNumberofHearts(index + 1)}
              />
            ))}
          </div>
          <span className="hearts-value">{numberofHearts}</span>
        </label>
        {/* Display error message */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default RecipeForm;