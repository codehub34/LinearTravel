import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-4">
            <div className="container text-center" id="footer-container">
                {/* Logo */}    
                <div className="logo-icon mb-3 text-white" >
                    <img src="/src/images/lineartravels_logo-br.png" alt="Linear Travels Logo" width="100" />    
                </div>

                {/* Social Media Links */}
                <div className="social-icons d-flex justify-content-center gap-3 mt-2">
                    <a href="https://www.facebook.com/profile.php?id=61576165256380" className="text-white"><FaFacebook size={20} /></a>
                    <a href="#" className="text-white"><FaTwitter size={20} /></a>
                    <a href="https://www.instagram.com/lineartravell/" className="text-white"><FaInstagram size={20} /></a>
                </div>

                {/* Navigation Links */}
                <div className="footer-links mt-3">
                    <a href="#home" className="text-white mx-2">Home</a>
                    <a href="#services" className="text-white mx-2">Services</a>
                    <a href="#destinations" className="text-white mx-2">Destinations</a>
                    <a href="#contact" className="text-white mx-2">Contact</a>
                </div>

            </div>
            <div id="footer-bottom">

                {/* Address */}
                <div>
                     <h4>Linear Travels ✈️</h4>
                     <p>Your gateway to seamless travel experiences.</p>
                </div>
                 {/* Contact Info */}
                <div className="contact-info mt-3">
                    <p><FaEnvelope /> Email: lineartravell@gmail.com</p>
                    <p>
                     <FaPhone /> 
                      Phone: <a href="https://wa.me/7633463875" target="_blank" rel="noopener noreferrer">
                       +1 (763) 346-3875
                             </a>
                    </p>
                </div>

                {/* Contact Information */}
                <div className="container2 text-center">
                    <p className="mb-0">© {new Date().getFullYear()} Linear Travels. All rights reserved.</p>
                    <p>Designed by <a href="mailto:masskeita64@gmail.com">Linear Travels Team</a></p>
                    <p>Terms of Service | Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;