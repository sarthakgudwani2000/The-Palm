import React from "react";
import './index.css';
import Home from './routes/Home.js'
import AboutUs from "../src/pages/aboutUs/AboutUs.jsx"
import ContactUs from './pages/contactUs/ContactUs.jsx'
import Attraction from './routes/Attraction'
import { Routes, Route } from "react-router-dom";
import ScrollToTop from './utils/ScrollToTop';


export const App = () => {
  return (
    <>
    <ScrollToTop></ScrollToTop>
    <Routes>
      <Route path= "/" element={<Home />} />
      <Route path= "/aboutus" element={<AboutUs />} />
      <Route path= "/contactus" element={<ContactUs />} />
      <Route path= "/attractions" element={<Attraction />} />
    </Routes>
      
    </>
  )
}

export default App;