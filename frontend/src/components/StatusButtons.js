import React from "react"
import { useState } from "react"
import './StatusButtons.css'
import { motion } from 'framer-motion'

const StatusButtons = ({ setSelectedStatusEffect, resetFilters }) => {
    const [selectedButton, setSelectedButton] = useState(null);
    
    const handleButtonClick = (effect) => {
        setSelectedStatusEffect(effect);
        setSelectedButton(effect);
    };

    const handleResetClick = () => {
        resetFilters();
        setSelectedButton(null);
    };

    return (
        <div className="container">
            <div className="buttonBar">
                <motion.button
                    className={`${selectedButton === "Hearty" ? 'selected' : ''}`}
                    whileHover={selectedButton !== "Hearty" ? { scale: 1.3, y: -5, cursor: 'pointer' } : {}}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Adjust spring animation parameters
                    onClick={() => handleButtonClick("Hearty")}
                    style = {{color: 'red', fontSize: '1.2em'}}

                >
                    Hearty
                </motion.button>

                <motion.button
                    className={`${selectedButton === "Chilly" ? 'selected' : ''}`}
                    whileHover={selectedButton !== "Chilly" ? { scale: 1.3, y: -5, cursor: 'pointer' } : {}}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Adjust spring animation parameters
                    onClick={() => handleButtonClick("Chilly")}
                    style = {{color: '#0adaff', fontSize: '1.2em'}}
                >
                    Chilly
                </motion.button>

                <motion.button
                    className={`${selectedButton === "Hasty" ? 'selected' : ''}`}
                    whileHover={selectedButton !== "Hasty" ? { scale: 1.3, y: -5, cursor: 'pointer' } : {}}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Adjust spring animation parameters
                    onClick={() => handleButtonClick("Hasty")}
                    style = {{color: 'blue', fontSize: '1.2em'}}
                >
                    Hasty
                </motion.button>

                <motion.button

                    className={`${selectedButton === "Sneaky" ? 'selected' : ''}`}
                    whileHover={selectedButton !== "Sneaky" ? { scale: 1.3, y: -5, cursor: 'pointer' } : {}}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Adjust spring animation parameters
                    onClick={() => handleButtonClick("Sneaky")}
                    style = {{color: 'purple', fontSize: '1.2em'}}
                >
                    Sneaky
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.3, y: -5, cursor: 'pointer'}}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    onClick={handleResetClick}
                    style = {{fontSize: '1.2em'}}
                >
                    Reset
                </motion.button>
            </div>
        </div>
    );
};

export default StatusButtons;