import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import Typed from "typed.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "/src/Components/Hero.css";

import image1 from "/src/images/Japan.jpg";
import image2 from "/src/images/LinearTravel.png";

const Hero = ({ darkMode }) => {
    // State for form visibility
    const [showApplyForm, setShowApplyForm] = useState(false);
    const [successMessage, setSuccessMessage] = useState(""); // State for success response

    // State for form data
    const [formData, setFormData] = useState({
        user_name: "",
        email: "",
        phone: "",
        country: "",
        address: "",
        schoolLevel: "",
    });

    // Ref for typed effect
    const typedElement = useRef(null);

    // Initialize typed animation
    useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: ["The visa process.", "Secure job placement.", "Provide Cultural Coaching."],
            typeSpeed: 90,
            backSpeed: 2,
            loop: true,
            cursorChar: "|",
        });

        return () => {
            typed.destroy();
        };
    }, []);

    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission with Email.js
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form fields
        if (!formData.user_name || !formData.email || !formData.phone || !formData.country || !formData.address || !formData.schoolLevel) {
            alert("Please fill out all required fields before submitting.");
            return;
        }

        emailjs.send(
            "default_service",
            "template_imuzkxi",
            formData,
            "FCNq54kRlb3e_ucdR"
        ).then(
            (response) => {
                console.log("Email sent successfully!", response);
                setSuccessMessage("✅ Application submitted successfully!");
                
                // Automatically clear success message after 5 seconds
                setTimeout(() => {
                    setSuccessMessage("");
                }, 5000);

                setShowApplyForm(true);
                setFormData({ user_name: "", email: "", phone: "", country: "", address: "", schoolLevel: "" });
            },
            (error) => {
                console.error("Error sending email:", error);
                setSuccessMessage("❌ Failed to submit application. Try again.");
            }
        );
    };

    return (
        <section className={`hero ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`} id="home">
            <div className="containerH text-center">
                {/* Hero Content */}
                <div className="hero-content">
                   <h1 className={`hero-title ${darkMode ? "text-red text-shadow" : "text-none"}`}>Apply Now!!</h1>
                    <h2 className={`hero-subtitle ${darkMode ? "text-white" : "text-dark"}`}>
                        We streamline, <br/> <span className="typed" ref={typedElement}></span>
                    </h2>
                    <p className={`hero-text ${darkMode ? "text-white" : "text-dark"}`}>
                        Linear Travel provides Liberians with a straightforward path to 
                        access Japan’s expanding job and education opportunities, 
                        ensuring a direct route from ambition to success.
                    </p>

                    {/* Apply Button */}
                    <button className="cta-btn mt-3" onClick={() => setShowApplyForm(!showApplyForm)}>
                        {showApplyForm ? "Close Form" : "Apply"}
                    </button>

                    {/* Application Form - Uses Email.js */}
                    {showApplyForm && (
                        <form className={`apply-form p-3 border rounded mt-3 ${darkMode ? "bg-dark text-white" : "bg-white text-dark" }`} onSubmit={handleSubmit}>
                            <button type="button" className={`btn-close ${darkMode ? "text-white" : "text-dark"}`} onClick={() => setShowApplyForm(false)} aria-label="Close"></button>
                            <h3 className="text-center">Application Form</h3>
                            <p className="text-center">Fill out the form below to apply.</p>

                            <label htmlFor="user_name" className={`user_name ${darkMode ? "text-white" : "text-dark"}`}>Full Name:</label>
                            <input type="text" id="user_name" name="user_name" value={formData.user_name} onChange={handleChange} className="form-control mb-3" required />

                            <label htmlFor="email" className={`email ${darkMode ? "text-white" : "text-dark"}`}>Email:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control mb-3" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Enter a valid email address"/>

                            <label htmlFor="phone" className={`phone ${darkMode ? "text-white" : "text-dark"}`}>Phone:</label>
                            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-control mb-3" required pattern="[0-9]{10,15}" title="Enter a valid phone number"/>

                            <label htmlFor="country" className={`Country ${darkMode ? "text-white" : "text-dark"}`}>Country:</label>
                            <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} className="form-control mb-3" required />

                            <label htmlFor="address" className={`address ${darkMode ? "text-white" : "text-dark"}`}>Address:</label>
                            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="form-control mb-3" required />

                            <label htmlFor="schoolLevel" className={`schoollevel ${darkMode ? "text-white" : "text-dark"}`}>School Level:</label>
                            <select id="schoolLevel" name="schoolLevel" value={formData.schoolLevel} onChange={handleChange} className="form-control mb-3" required>
                                <option value="">Select Level</option>
                                <option value="High School">High School</option>
                                <option value="Undergraduate">Undergraduate</option>
                                <option value="Graduate">Graduate</option>
                            </select>

                            <button type="submit" className="btn btn-primary w-100">Submit</button>

                            {/* Success Message Display */}
                            {successMessage && (
                                <div className="msg text-center mt-3">
                                    <p className="alert alert-success">{successMessage}</p>
                                </div>
                            )}
                        </form>
                    )}
                </div>

                {/* Image Slider */}
                <div className="hero-slider mt-4">
                    <Slider {...sliderSettings}>
                        <div>
                            <img src={image1} alt="Japan" className="slider-image img-fluid" />
                        </div>
                        <div>
                            <img src={image2} alt="Linear Travel" className="slider-image img-fluid" />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Hero;