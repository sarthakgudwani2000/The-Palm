import React, { useState, useEffect } from 'react'
import './AboutUs.css'
import AboutSectionImage1 from '../../assets/images/about_us1.jpg'
import AboutSectionImage2 from '../../assets/images/about_us2.jpg'
import AboutSectionImage3 from '../../assets/images/about_us3.jpg'
import Testimonial  from '../../container/Testimonial/Testimonial.jsx'
import { Fade } from "react-reveal";
import hotel from "../../assets/images/about_hotel.jpg"
import Footer from '../../components/footer/Footer.jsx'
import Navbar from '../../components/navbar/Navbar.jsx'


const AboutUs = () => {
  const images = [AboutSectionImage1, AboutSectionImage2, AboutSectionImage3]; 
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [images.length])

  const handleChangeImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <>
    <Navbar/>
    <section className='aboutus'>
      <div className='mask'>
        <img className='aboutusSection-img' src={images[currentImage]} alt='About Section' />
      </div>
      <div className='content'>
      <h1>
          {currentImage === 0 && "Experience Comfort"}
          {currentImage === 1 && "Indulge In Excellence"}
          {currentImage === 2 && "Discover Luxury"} 
        </h1>
        <div>
          
        </div>
      </div>
      <div className='slider-radio-buttons'>
          {images.map((_, index) => (
            <input
              key={index}
              type='radio'
              name='image-slider'
              checked={currentImage === index}
              onChange={() => handleChangeImage(index)}
            />
          ))}
        </div>
        <section className="about">
        <div className="about_container">
        
        <Fade left duration={1700} >
          <div className="about_container_info">
            <h4>WELCOME TO HOTEL BLISS </h4>
            <h2>
              Enjoy Your Luxury Experience
            </h2>
            <p>
            Situated in the scenic Bhimtal town, 
            Hotel bliss welcomes you to discover serenity amidst the embrace of nature.
            With a view of the tranquil Bhimtal Lake, our establishment provides a 
            harmonious mix of contemporary luxury and rustic allure.
            Immerse yourself in the awe-inspiring beauty of the environment
            while enjoying our genuine hospitality. Whether you're looking for a 
            calm retreat or thrilling escapades, Hotel bliss in Bhimtal serves as your
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
     
    </section>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default AboutUs;