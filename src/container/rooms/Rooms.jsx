
import React from 'react';
import { PiMountainsFill } from "react-icons/pi";

import { BiSolidArea } from 'react-icons/bi';
import { IoBed, IoPerson } from 'react-icons/io5';
import exroom from '../../assets/room1.jpg';
import sdroom from '../../assets/room2.jpg';
import './Rooms.css';

const RoomsPage = () => {
  return (
    <div className='rooms-container'>
      <div className='head'>
        <h1>Our Rooms</h1>
      </div>
        <div className='container'>
          <div className="room-card">
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

          <div className="room-card">
            <img src={sdroom} alt=""/>
            <div className='middle'>

            <h2>Super Deluxe Room 
</h2></div>
<p>. The comfortable cozy room with its warmth and elegance provides you with the satisfaction that lingers for some time</p>
<ul>
<li><BiSolidArea></BiSolidArea> 225 sq.ft</li>

<li><IoPerson></IoPerson>Max 4 Guests</li>
<li><IoBed></IoBed> King Bed</li>
<li><PiMountainsFill></PiMountainsFill>Mountain view</li>
</ul>

          </div>

          <div className="room-card">
            <img src={exroom} alt=''/>
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
        </div>
    </div>
  );
}

export default RoomsPage;


