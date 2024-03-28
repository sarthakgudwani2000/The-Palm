import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../container/hero/Hero'
import About from '../container/About_Us/About_us.jsx'
import Facilities from '../container/Facilities/Facilities.jsx';
import Rooms from '../container/Rooms/Rooms.jsx';
import Testimonial from '../container/Testimonial/Testimonial.jsx';
import Footer from '../components/footer/Footer.jsx'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <Rooms />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home