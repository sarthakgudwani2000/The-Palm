import React from "react";
import "./About_us.css";
import { Fade } from "react-reveal";
import hotel from "../../assets/images/about_hotel.jpg"
import {Link} from "react-router-dom";
const About = () => {
  return (
    <>
      <section className="about">
        <div className="about_container">
        
        <Fade left distance="20%" duration={1700} >
          <div className="about_container_info">
            <h4>WELCOME TO HOTEL BLISS</h4>
            <h2>
              Enjoy Your Luxury Experience
            </h2>
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
            <Link to="/aboutus" className="button">
               More About Us
            </Link>
          </div>
          </Fade>
         
          <Fade right distance="20%" duration={1700} >
          <div className="about_container_imgBox">
            <img src={hotel} alt="restaurant photo" />
           
          </div>
          </Fade>
        </div>
     
      </section>
    </>
  );
};

export default About;
