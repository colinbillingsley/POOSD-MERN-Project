import React from 'react'

const BackgroundImage = ({ imageUrl }) => {
    const backgroundStyle = {
      backgroundImage: `url(${imageUrl}) no-repeat fixed`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh', // Adjust as needed
    };
  
    return <div style={backgroundStyle}></div>;
  };
  
  export default BackgroundImage;
  