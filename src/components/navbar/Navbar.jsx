// import React, { useState } from "react";
// import "./Navbar.css";
// import logo from "../../assets/logo.jpg";
// // import { Fade } from "react-reveal";
// import { CgMenu } from "react-icons/cg";
// import { CgClose } from "react-icons/cg";
// import { Link, useNavigate } from "react-router-dom";



// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);
//   const navigate = useNavigate();

//   const handleToggle = () => {
//     setToggle(!toggle);
//   };

//   const handleMenuItemClick = (path) => {
//     navigate(path);
//     setToggle(false);
//   };

//   return (
//     <>
//       {/* <Fade  duration={1500}> */}
//         <nav className="navbar">
//           <div className="navbar_imgBox">
//             <img src={logo} alt="logo"/>
//           </div>
//           <div className="navbar_navLinks">
//             <ul>
//               <li>
//                 <Link to={"/"}>Home</Link>
               
//               </li>
//               <li>
//                 <Link to={"/about"}>About</Link>
                
//               </li>
//               <li>
//                 <Link to={"/attraction"}>Attractions</Link>
                
//               </li>
//               <li>
//                 <Link to={"/contactUs"}>Contact</Link>
                
//               </li>
//             </ul>
//           </div>
//           {/* <Fade right cascade duration={500}> */}
//             <div className="navbar_menu">
//               {toggle ? (
//                 <CgClose
//                   fontSize={27}
//                   color="#ffffff"
//                   onClick={handleToggle}
//                 />
//               ) : (
//                 <CgMenu
//                   fontSize={27}
//                   color="#ffffff"
//                   onClick={handleToggle}
//                 />
//               )}

//               {toggle && (
//                 <div className="navbar_menu_navLinks">
//                   <ul>
//                   <li>
//                 <Link to={"/"}>Home</Link>
               
//               </li>
//               <li>
//                 <Link to={"/about"}>About</Link>
                
//               </li>
//               <li>
//                 <Link to={"/attraction"}>Attractions</Link>
                
//               </li>
//               <li>
//                 <Link to={"/contactUs"}>Contact</Link>
                
//               </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           {/* </Fade> */}
//         </nav>
//       {/* </Fade> */}
//     </>
//   );
// };

// export default Navbar;


import { Link } from 'react-router-dom';
import './Navbar.css';
import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/logo.png'

const Navbar = () => {

    const [click, onClick] = useState(false);
    const handleClick = () => onClick(!click);

    const [color, setcolor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setcolor(true);
        } else {
            setcolor(false);
        }
    };

    window.addEventListener('scroll', changeColor)
    // useEffect(() => {
    //     window.addEventListener('scroll', changeColor);
    //     return () => window.removeEventListener('scroll', changeColor);
    //   }, []);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <div className="navbar_imgBox">
            <Link to="/">
             <img src={logo} alt="logo"/>
             </Link>
           </div>
{/* 
            <Link to="/">
                <h1>Traveller Inn</h1>
            </Link> */}
            <ul className={click ? 'nav-menu active' :  'nav-menu'}>
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
            <div className='hamburger' onClick={handleClick}>
                {click ? ( <FaTimes size={20} style={{color: "#fff"}} /> ) : (<FaBars size={20} style={{color: "#fff"}}/>)}
                
            </div>
        </div>

    )
}

export default Navbar