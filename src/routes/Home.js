import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../container/hero/Hero'
import About from '../container/About_Us/About_us.jsx'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default Home