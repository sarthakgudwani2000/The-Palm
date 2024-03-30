import React from 'react';

import './Facilities.css';
import { TfiHeadphoneAlt } from "react-icons/tfi";

import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { FaParking } from 'react-icons/fa';
import { IoMdRestaurant } from "react-icons/io";
import { IoIosWifi } from "react-icons/io";
import { LiaTableTennisSolid } from "react-icons/lia";
import { IoBonfireSharp } from "react-icons/io5";


const Facilities = () => {
    return (
        <div className="facilities_container">
            <h1>Facilities</h1>

            <div className='facilities-container'>
                <h1>Into the realm of <span className='new'>luxury hotel</span></h1>
                <div className='facility-wrapper'>
                    <div className="facility-card">
                        <div className="icon">
                            <IoIosWifi></IoIosWifi>
                        </div>
                        <div className='content'>
                            <h3>Free High Speed Wi-Fi</h3>
                        </div>
                    </div>

                    <div className="facility-card">
                        <div className="icon">
                            <LiaTableTennisSolid />

                        </div>
                        <div className='content'>
                            <h3>
                                Recreational Facilities</h3>
                        </div>
                    </div>
                    <div className="facility-card">
                        <div className="icon">
                            <FaParking></FaParking>
                        </div>
                        <div className='content'>
                            <h3>Free Parking</h3>
                        </div>
                    </div>

                    <div className="facility-card">
                        <div className="icon">
                            <IoMdRestaurant></IoMdRestaurant>
                        </div>
                        <div className='content'>

                            <h3>Restaurant and Dining Area</h3>
                        </div>
                    </div>

                    <div className="facility-card">
                        <div className="icon">
                            <IoBonfireSharp></IoBonfireSharp>
                        </div>
                        <div className='content'>
                            <h3>Bonfire</h3>
                        </div>

                    </div>
                    <div className="facility-card">
                        <div className="icon">
                            <FaUserDoctor></FaUserDoctor>
                        </div>
                        <div className='content'>
                            <h3>Doctor on Call</h3>

                        </div>
                    </div>

                    <div className="facility-card">
                        <div className="icon">
                            <TfiHeadphoneAlt />

                        </div>
                        <div className='content'>
                            <h3>
                                Friendly Host and Support</h3>
                        </div>
                    </div>
                    <div className="facility-card">
                        <div className="icon">
                            <MdOutlineSecurity></MdOutlineSecurity>
                        </div>
                        <div className='content'>
                            <h3>24/7 High Level Security</h3>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Facilities;