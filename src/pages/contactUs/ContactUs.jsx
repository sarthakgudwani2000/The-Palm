import React from "react";
import "./ContactUs.css";
import Aboutimg from "../../assets/images/About.jpg";
import Navbar from "../../components/navbar/Navbar";
import { Fade } from "react-reveal";

import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";
const ContactUs = () => {
  return (
    <>
        <Navbar />
      <section className="contact">
      
        <div className="contact_hero">
        <Fade bottom distance="20%" duration={1700} >
          <h1>Contact Us</h1>
          </Fade>
        </div>

        <div className="contact_main">
          <div className="contact_main_heading">
          <Fade bottom distance="20%" duration={1700} >
          <h1>"Get in Touch with THE PALM"</h1>
            <h4>Reach Out for Your Perfect Stay</h4>
            </Fade>
          </div>
          <div className="contact_main_container">
            <div className="contact_main_container_imgBox">
            <Fade left distance="20%" duration={1700} >
            <img src={Aboutimg} alt="contact"></img>
            </Fade>
            </div>
            <div className="contact_main_container_infoBox">
            <Fade right distance="20%" duration={1700} >
              <div className="contact_main_container_infoBox_card">
                <div className="contact_main_container_infoBox_card_icon">
                  <FaHome
                    size={40}
                    style={{ color: "#4e492a", marginRight: "2rem" }}
                  />
                </div>
                <div className="contact_main_container_infoBox_card_info">
                  <p>The Palm Hotel, Mehra Gaon, Bhimtal  </p>
                  <p>Dist. Nainital, Uttarakhand</p>
                </div>
              </div>
              <div className="contact_main_container_infoBox_card">
                <div className="contact_main_container_infoBox_card_icon">
                  <FaPhone
                    size={40}
                    style={{ color: "#4e492a", marginRight: "2rem" }}
                  />
                </div>
                <div className="contact_main_container_infoBox_card_info">
                  <p>9999999999</p>
                </div>
              </div>
              <div className="contact_main_container_infoBox_card">
                <div className="contact_main_container_infoBox_card_icon">
                  <FaMailBulk
                    size={40}
                    style={{ color: "#4e492a", marginRight: "2rem" }}
                  />
                </div>
                <div className="contact_main_container_infoBox_card_info">
                 <p>thepalm@email.com</p>
                </div>
              </div>
              </Fade>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;