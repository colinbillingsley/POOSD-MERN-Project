import React from "react"
import { useState } from "react"
import './StatusButtons.css'
import { motion } from 'framer-motion'

const StatusButtons = () => {

    return (
        <div className="container">
            <div className="buttonBar">
                <motion.button
                    whileHover = {{scale:1.3, y: -5}}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Adjust spring animation parameters
                >
                    Hearty
                </motion.button>
                <motion.button
                    whileHover = {{scale:1.3, y: -5}}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Adjust spring animation parameters
                >
                    Chilly
                </motion.button>
                <motion.button
                    whileHover = {{scale:1.3, y: -5}}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Adjust spring animation parameters
                >
                    Hasty
                </motion.button>
                <motion.button
                    whileHover = {{scale:1.3, y: -5}}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Adjust spring animation parameters
                >
                    Sneaky
                </motion.button>
            </div>
        </div>
    );
};

export default StatusButtons;