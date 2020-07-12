import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlus, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer () {
    return (
        <div>
            <footer className="footer">
                <div className="main-part">
                    <div className="footer-list-wrapper">
                        <h3 className="footer-heading">Grand Royal</h3>
                        <ul className="footer-list">
                            <li className="footer-list-item">
                                <a href="!#" className="footer-list-link">
                                    support@grandhotel.com
                                </a>
                            </li>
                            <li className="footer-list-item">
                                <a href="!#" className="footer-list-link">
                                    New York, Main Street 123
                                </a>
                            </li>
                            <li className="footer-list-item">
                                <a href="!#" className="footer-list-link">
                                    Tel: +123 321 231
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-list-wrapper">
                        <h3 className="footer-heading">Explore</h3>
                        <ul className="footer-list">
                            <li className="footer-list-item">
                                <a href="!#" className="footer-list-link">
                                    Home
                                </a>
                            </li>
                            <li className="footer-list-item">
                                <a href="!#" className="footer-list-link">
                                    About Us
                                </a>
                            </li>
                            <li className="footer-list-item">
                                <a href="!#" className="footer-list-link">
                                    Rooms
                                </a>
                            </li>
                            <li className="footer-list-item">
                                <a href="!#" className="footer-list-link">
                                    Home
                                </a>
                            </li>
                            <li className="footer-list-item">
                                <a href="!#" className="footer-list-link">
                                    Customer
                                </a>
                            </li>
                            <li className="footer-list-item">
                                <a href="!#" className="footer-list-link">
                                    Content
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-list-wrapper">
                        <h3 className="footer-heading">Legal</h3>
                        <ul className="footer-list">
                            <li className="footer-list-item">
                                <a href="!#" className="footer-list-link">
                                    Claim
                                </a>
                            </li>
                            <li className="footer-list-item">
                                <a href="!#" className="footer-list-link">
                                    Privacy
                                </a>
                            </li>
                            <li className="footer-list-item">
                                <a href="!#" className="footer-list-link">
                                    Terms
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h3 className="footer-heading">Contact</h3>
                        <p>Sign up for News</p>
                        <form class="footer-form">
                            <input type="text" class="footer-input" placeholder="Your email">
                            </input>
                            <button className="footer-btn">Sign Up</button> 
                        </form>
                        <ul className="social-icons-footer">
                            <li>
                                <a href="!#" className="social-link-footer"><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
                            </li>
                            <li>
                                <a href="!#" className="social-link-footer"><FontAwesomeIcon className="icon" icon={faGooglePlus} /></a>
                            </li>
                            <li>
                                <a href="!#" className="social-link-footer"><FontAwesomeIcon className="icon" icon={faFacebook} /></a>
                            </li>
                            <li>
                                <a href="!#" className="social-link-footer"><FontAwesomeIcon className="icon" icon={faInstagram} /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="creator-part">
                    <div className="copyright-text">
                        Copyright &copy; 2020. Grand Royal. All Rights Reserved
                    </div>
                </div>
            </footer>
        </div>
    );
}