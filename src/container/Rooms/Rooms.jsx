import React, { useState } from 'react';
import { MdOutlineZoomOutMap } from "react-icons/md";

// import { PiMountainsFill } from "react-icons/pi";
import { BiSolidArea } from 'react-icons/bi';
import { IoBed, IoPerson } from 'react-icons/io5';
import suit from '../../assets/images/room3.jpg';
import { Fade } from "react-reveal";
import exroom from '../../assets/images/room1.jpg';
import sdroom from '../../assets/images/room2.jpg';
import './Rooms.css';

const RoomsPage = () => {
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <div className='rooms-container'>
      <div className='head'>
      <Fade bottom distance="20%" duration={1700} >
        <h1>Our Rooms</h1>
        </Fade>
      </div>
      <div className='container'>
      <Fade bottom distance="20%" duration={1700} >
        <div className="room-card" onClick={() => handleImageClick(exroom)}>
        <MdOutlineZoomOutMap className="zoom-icon" />

          <img src={exroom} alt=''/>


          <div className='middle'>
            <h2>Executive Room</h2>
          </div>
          <p>These compact yet spacious, business like but cozy rooms with a view of the rustic countryside</p>
          <ul>
            <li><BiSolidArea></BiSolidArea> 225 sq.ft</li>
            <li><IoPerson></IoPerson>Max 4 Guests</li>
            <li><IoBed></IoBed> King Bed</li>
          </ul>
        </div>

        <div className="room-card" onClick={() => handleImageClick(sdroom)}>
        <MdOutlineZoomOutMap className="zoom-icon" />

          <img src={sdroom} alt=""/>
          <div className='middle'>
            <h2>Super Deluxe Room</h2>
          </div>
          <p>The comfortable cozy room with its warmth provides you with the satisfaction that lingers for some time</p>
          <ul>
            <li><BiSolidArea></BiSolidArea> 225 sq.ft</li>
            <li><IoPerson></IoPerson>Max 4 Guests</li>
            <li><IoBed></IoBed> King Bed</li>
          </ul>
        </div>

        <div className="room-card" onClick={() => handleImageClick(suit)}>
        <MdOutlineZoomOutMap className="zoom-icon" />

          <img src={suit} alt=''/>
          <div className='middle'>
            <h2>Palm Suit</h2>
          </div>
          <p>Rooms with personal corner couch and comfortable in amenities with adequate space give a luxurious feel.</p>
          <ul>
            <li><BiSolidArea></BiSolidArea> 150 sq.ft</li>
            <li><IoPerson></IoPerson>Max 4 Guests</li>
            <li><IoBed></IoBed> Queen Bed</li>
          </ul>
        </div>
        </Fade>
      </div>

      {/* Modal for displaying the image */}
      {modalImage && (
        <div className='blur'>
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={modalImage} alt="Room" className='modalimg' />
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default RoomsPage;
