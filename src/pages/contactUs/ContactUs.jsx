import React from "react";
import "./ContactUs.css";
import Aboutimg from "../../assets/About.jpg";

import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";
const ContactUs = () => {
  return (
    <>
      <section className="contact">
        <div className="contact_hero">
          <h1>Contact Us</h1>
        </div>

        <div className="contact_main">
          <h1>"Get in Touch with THE PALM"</h1>
            <h4>Reach Out for Your Perfect Stay</h4>

          <div className="contact_main_container">
            <div className="contact_main_container_imgBox">
            <img src={Aboutimg} alt="contact"></img>
            </div>
            <div className="contact_main_container_infoBox">
              <div className="contact_main_container_infoBox_card">
                <div className="contact_main_container_infoBox_card_icon">
                  <FaHome
                    size={40}
                    style={{ color: "#407a61", marginRight: "2rem" }}
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
                    style={{ color: "#407a61", marginRight: "2rem" }}
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
                    style={{ color: "#407a61", marginRight: "2rem" }}
                  />
                </div>
                <div className="contact_main_container_infoBox_card_info">
                 <p>thepalm@email.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;