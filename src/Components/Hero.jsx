import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import Typed from "typed.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "/src/Components/Hero.css";

import image1 from "/src/images/Japan.jpg";
import image2 from "/src/images/lineartravels_logo-br.png";
// import { GiH2O } from "react-icons/gi";

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
      strings: [
        "The visa process.",
        "Secure job placement.",
        "Provide Cultural Coaching.",
      ],
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
    // Combine country code and phone Number
    const genderData = `${formData.user_name} || Gender: ${formData.gender}`;
    const fullPhone = `${formData.areaCode} ${formData.phone}`;
    const qualificationPathway = `${formData.schoolLevel} || Pathway: ${formData.pathway}`;
    const receivedData = `${formData.country} ${formData.state} ${formData.postalCode}`;
    // Validate form fields
    if (
      !formData.user_name ||
      !formData.email ||
      !formData.phone ||
      !formData.country ||
      !formData.address ||
      !formData.schoolLevel
    ) {
      alert("Please fill out all required fields before submitting.");
      return;
    }

    formData.user_name = genderData;
    formData.phone = fullPhone;
    formData.schoolLevel = qualificationPathway;
    formData.country = receivedData;

    emailjs
      .send(
        "default_service",
        "template_imuzkxi",
        formData,
        "FCNq54kRlb3e_ucdR"
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setSuccessMessage("✅ Application submitted successfully!");

          // Automatically clear success message after 5 seconds
          setTimeout(() => {
            setSuccessMessage("");
          }, 3000);

          setShowApplyForm(false);
          setFormData({
            user_name: "",
            email: "",
            phone: "",
            country: "",
            address: "",
            schoolLevel: "",
          });
          // setTimeout(() => {
          //      alert(`Thank you for applying, ${formData.user_name}! We will review your application and get back to you soon.`);
          // }, 2000);
        },
        (error) => {
          console.error("Error sending email:", error);
          setSuccessMessage("❌ Failed to submit application. Try again.");
        }
      );
    console.log(e);
  };

  return (
    <section
      className={`hero ${
        darkMode ? "bg-dark text-white" : "bg-light text-dark"
      }`}
      id="home"
    >
      <div className="containerH text-center">
        {/* Success Message Display */}
        {successMessage && (
          <div className="msg text-center mt-3">
            <p className="alert alert-success">{successMessage}</p>
          </div>
        )}
        {/* Hero Content */}
        <div className="hero-content">
          <h1
            className={`hero-title ${
              darkMode ? "text-red text-shadow" : "text-none"
            }`}
          >
            Apply Now!!
          </h1>
          <h2
            className={`hero-subtitle ${darkMode ? "text-white" : "text-dark"}`}
          >
            We streamline, <br />{" "}
            <span className="typed" ref={typedElement}></span>
          </h2>
          <p className={`hero-text ${darkMode ? "text-white" : "text-dark"}`}>
            Linear Travel provides Liberians with a straightforward path to
            access Japan’s expanding job and education opportunities, ensuring a
            direct route from ambition to success.
          </p>

          {/* Apply Button */}
          <button
            className="cta-btn mt-3"
            onClick={() => setShowApplyForm(!showApplyForm)}
          >
            {showApplyForm ? "Close Form" : "Apply"}
          </button>

          {/* Application Form - Uses Email.js */}
          {showApplyForm && (
            <form
              className={`apply-form p-3 border rounded mt-3 ${
                darkMode ? "bg-dark text-white" : "bg-white text-dark"
              }`}
              onSubmit={handleSubmit}
            >
              <div className="HeaderImage">
                <button
                  type="button"
                  className={`btn-close ${
                    darkMode ? "text-white" : "text-dark"
                  }`}
                  onClick={() => setShowApplyForm(false)}
                  aria-label="Close"
                ></button>
              </div>
              <h3 className="text-center">Application Form</h3>
              <p className="text-center">Fill out the form below to apply.</p>

              <div className="fullEmail">
                <div className="fullNameDiv">
                  <label
                    htmlFor="user_name"
                    className={`user_name ${
                      darkMode ? "text-white" : "text-dark"
                    }`}
                  >
                    Full Name:
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    className="form-control mb-3"
                    required
                  />
                </div>

                <div className="emaildiv">
                  <label
                    htmlFor="email"
                    className={`email ${darkMode ? "text-white" : "text-dark"}`}
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control mb-3"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Enter a valid email address"
                  />
                </div>
              </div>

              {/* <label htmlFor="phone" className={`phone ${darkMode ? "text-white" : "text-dark"}`}>Phone:</label> */}
              {/* <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-control mb-3" required pattern="[0-9]{10,15}" title="Enter a valid phone number"/> */}

              <div className="mb-3">
                Contact Number:
                <label
                  htmlFor="phone"
                  className={`form-label ${
                    darkMode ? "text-white" : "text-dark"
                  }`}
                ></label>
                <div className="input-group">
                  <select
                    id="areaCode"
                    name="areaCode"
                    value={formData.areaCode}
                    onChange={handleChange}
                    className="form-select"
                    style={{ maxWidth: "100px" }}
                    required
                  >
                    <option value="">Area Code</option>
                    <option value="+231">Liberia 🇱🇷 (+231)</option>
                    <option value="+1">United States 🇺🇸 (+1)</option>
                    <option value="+234">Nigeria 🇳🇬 (+234)</option>
                    <option value="+233">Ghana 🇬🇭 (+233)</option>
                    <option value="+254">Kenya 🇰🇪 (+254)</option>
                    <option value="+224">Guinea 🇬🇳 (+224)</option>
                  </select>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="234-234-4524"
                    required
                  />
                </div>
              </div>

              <label
                className={`form-label d-block ${
                  darkMode ? "text-white" : "text-dark"
                }`}
              >
                Gender:
              </label>
              <div className="mb-3">
                {["Male", "Female", "Other"].map((gender) => (
                  <div className="form-check form-check-inline" key={gender}>
                    <input
                      className="form-check-input"
                      type="radio"
                      id={gender}
                      name="gender"
                      value={gender}
                      checked={formData.gender === gender}
                      onChange={handleChange}
                      required
                    />
                    <label
                      className={`form-check-label ${
                        darkMode ? "text-white" : "text-dark"
                      }`}
                      htmlFor={gender}
                    >
                      {gender}
                    </label>
                  </div>
                ))}
              </div>

              {/* Street Address */}
              <label
                htmlFor="address"
                className={`form-label ${
                  darkMode ? "text-white" : "text-dark"
                }`}
              >
                Street Address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-control mb-3"
                required
              />
              {/* City */}
              <label
                htmlFor="city"
                className={`form-label ${
                  darkMode ? "text-white" : "text-dark"
                }`}
              >
                City:
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="form-control mb-3"
                required
              />
              {/* State */}
              <label
                htmlFor="state"
                className={`form-label ${
                  darkMode ? "text-white" : "text-dark"
                }`}
              >
                State/Province:
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="form-control mb-3"
                required
              />
              {/* Postal Code */}
              <label
                htmlFor="postalCode"
                className={`form-label ${
                  darkMode ? "text-white" : "text-dark"
                }`}
              >
                Postal/Zip Code:
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="form-control mb-3"
                required
              />

              <label
                htmlFor="pathway"
                className={`pathway ${darkMode ? "text-white" : "text-dark"}`}
              >
                Pathway
              </label>
              <select
                id="pathway"
                name="pathway"
                value={formData.pathway}
                onChange={handleChange}
                className="form-control mb-3"
                required
              >
                <option value="">Select your pathway ▼</option>
                <option value=" • Enrollment in a higher education program">
                  • Enrollment in a higher education program
                </option>
                <option value=" • Placement through professional job opportunities">
                  {" "}
                  • Placement through professional job opportunities
                </option>
                {/* <option value="Business">Business</option> */}
                {/* <option value="Health">Health</option> */}
              </select>

              <label
                className={`schoollevel d-block mb-2 ${
                  darkMode ? "text-white" : "text-dark"
                }`}
              >
                Education Level:
              </label>

              <div className="mb-3">
                {["High School", "Undergraduate", "Graduate"].map((level) => (
                  <div className="form-check" key={level}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={level}
                      name="schoolLevel"
                      value={level}
                      checked={formData.schoolLevel.includes(level)}
                      onChange={handleChange}
                    />
                    <label
                      className={`form-check-label ${
                        darkMode ? "text-white" : "text-dark"
                      }`}
                      htmlFor={level}
                    >
                      {level}
                    </label>
                  </div>
                ))}
              </div>

              <button type="submit" className="btn-Apply btn-primary w-50">
                Apply Now!
              </button>

              <div className="form-check mt-3 mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms || false}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      terms: e.target.checked,
                    }))
                  }
                  required
                />
                <label
                  className={`form-check-label ${
                    darkMode ? "text-white" : "text-dark"
                  }`}
                  htmlFor="terms"
                >
                  I agree to the{" "}
                  <a href="/public/📜-Terms-and-Conditions.pdf" target="_blank" rel="noopener noreferrer">
                    Terms and Conditions of Linear Travel
                  </a>
                   , which outline my responsibilities, service expectations, and the relocation process from Liberia to Japan and other destinations.
                </label>
              </div>
            </form>
          )}
        </div>

        {/* Image Slider */}
        <div className="hero-slider mt-4">
          <Slider {...sliderSettings}>
            <div>
              <img
                src={image1}
                alt="Japan"
                className="slider-image img-fluid"
              />
            </div>
            <div>
              <img
                src={image2}
                alt="Linear Travel"
                className="slider-image img-fluid"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
