import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/Picture1.png';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const handleClick = () => setClick(!click);

    const changeColor = () => {
        if (window.scrollY >= 100) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeColor);
        return () => window.removeEventListener('scroll', changeColor);
    }, []);

    return (
        <div className={scrolling ? 'header header-bg border-black' : 'header'}>
            <div className="navbar_imgBox">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/attractions">Attractions</Link>
                </li>
                <li>
                    <Link to="/aboutus">About Us</Link>
                </li>
                <li>
                    <Link to="/contactus">Contact Us</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? <FaTimes size={20} style={{ color: '#fff' }} /> : <FaBars size={20} style={{ color: '#fff' }} />}
            </div>
        </div>
    );
};

export default Navbar;
