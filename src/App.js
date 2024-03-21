import React from "react";
import './index.css';
import Home from './routes/Home'
// import Attraction from "./pages/attraction/Attraction"
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
    <Routes>
      <Route path= "/" element={<Home />} />
      {/* <Route path= "/attractions" element={<Attraction />} /> */}
    </Routes>
      
    </>
  )
}

export default App;