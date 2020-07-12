import React from "react";
import './Body.css';
import Image from './../../images/about-us-img-1.jpeg';
import Image2 from './../../images/about-us-img-2.jpeg';
import Image3 from './../../images/about-us-img-3.jpeg';
import Image4 from './../../images/about-us-img-4.jpeg';
import Room from './../../images/room-1.jpeg';
import Room2 from './../../images/room-2.jpeg';
import Room3 from './../../images/room-3.jpeg';
import Room4 from './../../images/room-4.jpeg';
import Partner from './../../images/partner-1.svg';
import Partner2 from './../../images/partner-2.svg';

export default function Body () {

    return (
        <div>
            <section className="about-us">
                <div className="about-us-content">
                    <h1 className="about-us-heading">About Us</h1>
                    <div className="underline">
                        <div className="small-underline">
                        </div>
                        <div className="big-underline">
                        </div>
                    </div>
                    <h3 className="sub-heading">Grand Royal</h3>
                    <p className="about-us-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button className="about-us-btn">
                        Read More
                    </button>
                    
                </div>
                <div className="about-us-images">
                    <ul>
                        <li>
                            <img src={Image} className="image image-1" />
                        </li>
                        <li>
                            <img src={Image2} className="image image-2" />
                        </li>
                        <li>
                            <img src={Image3} className="image image-3" />
                        </li>
                        <li>
                            <img src={Image4} className="image image-4" />
                        </li>
                    </ul>
                </div>
            </section>
            <section className="rooms">
                <div className="common-header">
                    <h1 className="common-heading">Rooms in Grand Royal</h1>
                    <div className="underline">
                        <div className="small-underline">
                        </div>
                        <div className="big-underline">
                        </div>
                    </div>
                </div>
                <div className="rooms-cards-wrapper">
                    <div className="room-card">
                        <img src={Room} className="room-img" />
                        <div className="room-card-content">
                            <h4 className="room-card-heading">Single Room</h4>
                            <p className="room-card-paragraph">Lorem ipsum dolor sit amet.</p>
                            <p className="room-price">$99.00</p>
                            <button className="room-card-btn">
                                Book Now
                            </button>
                        </div>
                    </div>
                    <div className="room-card">
                        <img src={Room2} className="room-img" />
                        <div className="room-card-content">
                            <h4 className="room-card-heading">Double Room</h4>
                            <p className="room-card-paragraph">Lorem ipsum dolor sit amet.</p>
                            <p className="room-price">$199.00</p>
                            <button className="room-card-btn">
                                Book Now
                            </button>
                        </div>
                    </div>
                    <div className="room-card">
                        <img src={Room3} className="room-img" />
                        <div className="room-card-content">
                            <h4 className="room-card-heading">Lux Room</h4>
                            <p className="room-card-paragraph">Lorem ipsum dolor sit amet.</p>
                            <p className="room-price">$299.00</p>
                            <button className="room-card-btn">
                                Book Now
                            </button>
                        </div>
                    </div>
                    <div className="room-card">
                        <img src={Room4} className="room-img" />
                        <div className="room-card-content">
                            <h4 className="room-card-heading">VIP Room</h4>
                            <p className="room-card-paragraph">Lorem ipsum dolor sit amet.</p>
                            <p className="room-price">$399.00</p>
                            <button className="room-card-btn">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="rooms-btn-wrapper">
                    <button className="rooms-btn">Check All Rooms</button>
                </div>
            </section>
            <section className="partners">
                <div className="common-header">
                    <h1 className="common-heading">Our partners</h1>
                    <div className="underline">
                        <div className="small-underline"></div>
                        <div className="big-underline"></div>
                    </div>
                </div>
                <p className="partners-paragraph">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>                
                <div className="partners-card-wrapper">
                    <div className="partner-card">
                        <div className="partner-image-wrapper">
                            <img src={Partner} class="partner-image"/>
                        </div>
                        <div className="partner-info">
                            <h3 className="partner-fullname">KPMG</h3>
                            <p className="partner-paragraph-1">Trusted Partner</p>
                            <p className="partner-paragraph-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
                    <div className="partner-card">
                        <div className="partner-image-wrapper">
                            <img src={Partner2} class="partner-image"/>
                        </div>
                        <div className="partner-info">
                            <h3 className="partner-fullname">IBM</h3>
                            <p className="partner-paragraph-1">Trusted Partner</p>
                            <p className="partner-paragraph-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}