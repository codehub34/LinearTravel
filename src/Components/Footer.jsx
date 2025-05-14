import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-4">
            <div className="container text-center">
                <h4>Linear Travels ✈️</h4>
                <p>Your gateway to seamless travel experiences.</p>

                {/* Contact Info */}
                <div className="contact-info mt-3">
                    <p><FaEnvelope /> Email: lineartravell@gmail.com</p>
                    <p><FaPhone /> Phone: +1 (763) 346-3875</p>
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

                <p className="mt-4">© 2025 Linear Travels. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;