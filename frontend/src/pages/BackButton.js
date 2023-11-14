import React from 'react';
import './BackButton.css';

const BackButton = () => {
  return (
    <div className="arrow" onClick={() => console.log('Back button clicked')}>
      <div className="arrow-top"></div>
      <div className="arrow-bottom"></div>
    </div>
  );
};

export default BackButton;
