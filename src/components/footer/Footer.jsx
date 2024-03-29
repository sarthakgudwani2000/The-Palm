import React from 'react';
import './Footer.css';
import Logo from '../../assets/images/white_logo.png';
import { FaHome, FaMailBulk, FaPhone } from 'react-icons/fa';

// import { RiInstagramLine, RiTwitterLine, RiLinkedinLine, RiGithubLine } from 'react-icons/ri';


const Footer = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:palmhotelbhimtal@gmail.com';
    };

    const handlePhoneClick = () => {
        window.location.href = 'tel:08449122921';
    };
    return (
        <footer className="hero">
            <div className="logo-container">
                <img src={Logo} alt="Logo" className="logo" />
            </div>
            <div className="container flex">
                <div className="container__about">
                    <h2>About</h2>
                    <p>A young software developer, starting his professional life, learning the most used languages in this industry, PYTHON, C++, HTML, CSS, and JAVASCRIPT.</p>
                </div>
                <div className="container-pages flex">
                    <div className="container__recentpages">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="/attractions">Attractions</a></li>
                            <li><a href="/aboutus">About Us</a></li>
                            <li><a href="/contactus">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="container__more">
                        <h2>Contact Information</h2>
                        <ul>
                            <li>
                                <FaHome />
                                <a href="https://www.google.com/maps/place/The+Palm+Resort-8449122921/@29.3676741,79.5403515,17z/data=!4m9!3m8!1s0x39a0982500000001:0x3db2f70952143ad4!5m2!4m1!1i2!8m2!3d29.3676741!4d79.5429264!16s%2Fg%2F11h5dn0457?entry=ttu" target='_blank'>
                                    Mehragaon, Bhagatpura, Uttarakhand 263136
                                </a>
                            </li>
                            <li onClick={handlePhoneClick}> <FaPhone /> <a>08449122921</a></li>
                            <li onClick={handleEmailClick}> <FaMailBulk /> <a href="">palmhotelbhimtal@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="line__separate"></div>
            <div className="footer_copyRight">
                <h4>
                    All Rights Reserved &#169;
                    <a href="https://thezonzo.com/ " className="zonzo-text">
                        The Zonzo{" "}
                    </a>{" "}
                    2024
                </h4>
            </div>

            {/* <div className="icons">
                    <a href="https://t.co/VBNNTjtw3F" className="icon1 icon--instagram">
                        <RiInstagramLine />
                    </a>
                    <a href="#" className="icon1 icon--twitter">
                        <RiTwitterLine />
                    </a>
                    <a href="linkedin.com/in/brayan-ospina-8bb472243" className="icon1 icon--linkedin">
                        <RiLinkedinLine />
                    </a>
                    <a href="https://github.com/brayanospina2005/final-project" className="icon1 icon--github">
                        <RiGithubLine />
                    </a>
                </div> */}
            {/* </div> */}
        </footer>
    );
}

export default Footer;
