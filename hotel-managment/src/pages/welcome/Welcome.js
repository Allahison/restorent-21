import React from 'react';
import './Welcome.css'; // Import CSS for styling
import Navbar from '../../components/navbar/Navbar';

const Welcome = () => {
  return (
    <div className="welcome-container">
      
      <div className="welcome-message">
        <h1>Welcome to [Restaurant Name]!</h1>
        <p>
          Experience a delightful dining journey with us. We take pride in serving delicious meals made from the freshest ingredients.
        </p>
        <button className="explore-button">Explore Our Menu</button>
      </div>
    </div>
  );
};

export default Welcome;
