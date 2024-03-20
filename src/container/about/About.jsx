import React from 'react';
import Aboutimg from "../../assets/About.jpg";
import room1 from "../../assets/room1.jpg";
import room2 from "../../assets/room2.jpg";



import './About.css'; // Import the CSS file for styling

const AboutSection = () => {
  return (

<div className="about-section">
      <div className="image-container">
        <img src={room2} alt="abc" className='new' />
        <img src={room1} alt="abc" className='new' />

      </div>
      <div className="text-container">
        <h2>Experience nature and her bounties like you had never before at Hotel Traveller Inn!</h2>
        <p>  Traveller Inn is located in Bhowali. Travelling from Traveller Inn is hassle-free since the property is well-connected to popular commercial and business areas of the city. The bustling city centre lies at a suitable distance from the Traveller Inn.
        The Traveller Inn convenient location makes it an ideal stay option for both leisure and business travellers.</p>
           <button>Explore more</button>
    

      </div>
    </div>
  );
}

export default AboutSection;

