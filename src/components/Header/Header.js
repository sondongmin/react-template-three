import React, { useState } from "react";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlus, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Icon from '../../images/crown.png';

export default function Header () {
    const [open, setOpen] = useState(false);
    const handleDrawerToggle = () => {
        setOpen(!open);
    };
    
    return (
        <div>
            <div className="navbar">
                <div className="sidebar">
                    <div onClick={handleDrawerToggle} className="menu-icon">
                        <div className={'line line-1' + (open? ' active': '')}></div>
                        <div className={'line line-2' + (open? ' active': '')}></div>
                        <div className={'line line-3' + (open? ' active': '')}></div>
                    </div>
                    <ul className="social-icons-list">
                        <li>
                            <a href="!#" className="social-link"><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
                        </li>
                        <li>
                            <a href="!#" className="social-link"><FontAwesomeIcon className="icon" icon={faGooglePlus} /></a>
                        </li>
                        <li>
                            <a href="!#" className="social-link"><FontAwesomeIcon className="icon" icon={faFacebook} /></a>
                        </li>
                        <li>
                            <a href="!#" className="social-link"><FontAwesomeIcon className="icon" icon={faInstagram} /></a>
                        </li>
                    </ul>
                </div>
                <nav className={'navigation' + (open ? ' active': '')}>
                    <div className="navigation-header">
                        <h1 className="navigation-heading">Grand Royal</h1>
                        <form className="navigation-seach">
                            <input type="text" className="navigation-search-input" placeholder="Search"/>
                            <button className="navigation-search-btn">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </form>
                    </div>
                    <ul className="navigation-list">
                        <li className="navigation-item">
                            <a href="!#" className="navigation-link">Home</a>
                        </li>
                        <li className="navigation-item">
                            <a href="!#" className="navigation-link">About Us</a>
                        </li>
                        <li className="navigation-item">
                            <a href="!#" className="navigation-link">Rooms</a>
                        </li>
                        <li className="navigation-item">
                            <a href="!#" className="navigation-link">Events</a>
                        </li>
                        <li className="navigation-item">
                            <a href="!#" className="navigation-link">Customers</a>
                        </li>
                        <li className="navigation-item">
                            <a href="!#" className="navigation-link">Contact</a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>&copy; 2020. Grand Royal. All Rights Reserved</p>
                    </div>
                </nav>
            </div>
            <header className="header">
                <div className="brand">
                    <img src={Icon} className="icon"/>
                    <h3 className="hotel-heading">Grand Royal</h3>
                </div>
                <div className="banner">
                    <h4 className="banner-heading">
                        Welcome to Grand Royal
                    </h4>
                    <p className="banner-paragraph">
                        Enjoy a royal experience
                    </p>
                    <button className="banner-button">
                        Check Out
                    </button>
                </div>
            </header>
        </div>
    );
}