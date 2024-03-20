import React from "react";
import "./About_us.css";
import { Fade } from "react-reveal";
import hotel from "../../assets/images/about_hotel.jpeg"

const About = () => {
  return (
    <>
      <section className="about">
        <div className="about_container">
        
        <Fade left duration={1700} >
          <div className="about_container_info">
            <h4>WELCOME TO THE PALM </h4>
            <h2>
              Enjoy Your Luxury Experience
            </h2>
            <p>
            Situated in the scenic Bhimtal town, 
            The Palm welcomes you to discover serenity amidst the embrace of nature.
            With a view of the tranquil Bhimtal Lake, our establishment provides a 
            harmonious mix of contemporary luxury and rustic allure.
            Immerse yourself in the awe-inspiring beauty of the environment
            while enjoying our genuine hospitality. Whether you're looking for a 
            calm retreat or thrilling escapades, The Palm in Bhimtal serves as your
            entrance to an unforgettable getaway in the heart of the Himalayas.
            </p>
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
