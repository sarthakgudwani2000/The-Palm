import React from 'react'
import "./Rooms.css"
import room1 from "../../assets/room1.jpg";
import room2 from "../../assets/room2.jpg"
const Rooms = () => {
  return (
    <div>
        <div class="image-left">
                <img src={room1} alt="Human Rights Logo" />
                <div>
                    <h3>Executive Room with no balcony</h3>
                    <p>Nainital Lake is a crescent-shaped freshwater lake in Nainital, Uttarakhand, India. It's surrounded by hills, with views of the mountains. The lake is a popular tourist attraction, with boating, street food, and views of the mall road. </p>
                    <footer>(11.4 Km)</footer>
                </div>
            </div>
            <div class="image-left">
                <img src={room1} alt="Human Rights Logo" />
                <div>
                    <h3>Super Deluxe Room with balcony</h3>
                    <p>Nainital Lake is a crescent-shaped freshwater lake in Nainital, Uttarakhand, India. It's surrounded by hills, with views of the mountains. The lake is a popular tourist attraction, with boating, street food, and views of the mall road. </p>
                    <footer>(11.4 Km)</footer>
                </div>
            </div>
            

            <div class="image-left">
                <img src={room2} alt="Human Rights Logo" />
                <div>
                    <h3>Palm Suite</h3>
                    <p>Tiffin Top Hill is a hilltop which offers the most splendid 360-degree view of Nainital city and surrounding Kumaon mountains. Located 2290 m above sea level, this hilltop is a photographer's heaven and a perfect spot for a family picnic.</p>
                    <footer>(16.9 Km)</footer>
                </div>
            </div>
    </div>
  )
}

export default Rooms
