import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { RiDoubleQuotesL } from "react-icons/ri";


import './Testimonial.css';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 2000 
  };

  return (
    <div className='new-container'>
<h1 className='head'>Discover firsthand experiences from our guests, their feedback reflects the quality of service and memorable moments they've encountered.</h1>
    <Slider {...settings}>

    <div className='testimonial-container'>
        <div className="testimonial">    
 <p className="content">'My stay at The Palm was delightful. The combo of a prime location, comfortable accommodation, excellent service, and top-notch facilities made for a memorable experience. highly recommend this hotel.'</p>
          <div className="background-icon">
          <RiDoubleQuotesL className="quote-icon" />
        </div>
          <p className="name">'Aditi Sharma'</p>
          </div>
          </div>
        
          <div className='testimonial-container'>
          

      <div className="testimonial">
         
          <p className="content">'My time at The Palm was delightful. Its prime location, comfortable accommodation, excellent service, and top-notch facilities made for a memorable experience. Highly recommend this hotel.'</p>
          <div className="background-icon">
          <RiDoubleQuotesL className="quote-icon" />
        </div>
            <p className="name">'Vikas Chauhan'</p>
          </div>
      </div>
      <div className='testimonial-container'>
      

      <div className="testimonial">
          
          <p className="content">'My enjoyable time at The Palm was enhanced by its prime location, cozy accommodation, exceptional service, and top-tier facilities. I highly recommend this hotel for a memorable experience'</p>
          <div className="background-icon">
          <RiDoubleQuotesL className="quote-icon" />
        </div>
            <p className="name">'Ankur Kumar'</p>
          </div>
    </div>

    <div className='testimonial-container'>
      <div className="testimonial">
          
          <p className="content">'A delightful stay at The Palm, with its prime location, cozy accommodation, exceptional service, and top-notch facilities, creates an unforgettable experience. Highly recommend this hotel.'</p>
          <div className="background-icon">
          <RiDoubleQuotesL className="quote-icon" />
        </div>
            <p className="name">'Naneet Kumar'</p>
          </div>
      </div>

      <div className='testimonial-container'>

      <div className="testimonial">
          
          <p className="content">'A stay at The Palm proved delightful, blending prime location, comfortable accommodation, excellent service, and top-notch facilities for a memorable experience. Highly recommend the hotel.'</p>
          <div className="background-icon">
          <RiDoubleQuotesL className="quote-icon" />
        </div>
            <p className="name">'Sarthak Gudwani'</p>
          </div>
      </div>
    </Slider>
    </div>

     );
    };
export default Testimonial;
