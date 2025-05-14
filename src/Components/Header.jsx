import React, { useState } from "react";
import "/src/Components/Header.css";
import Logo from "/src/images/lineartravels_logo-br.png"; // Correct relative path
import {
  FaBars, FaTimes, FaHome, FaUser, FaTools,
  FaProjectDiagram, FaEnvelope, FaGithub, FaLinkedin,
  FaTwitter, FaSun, FaMoon
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`py-0 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
       <div className="logoContainer d-flex align-items-center" style={{ zIndex: 100 }}>
  <img
    className="logo img-fluid"
    src={Logo}
    alt="Logo"
    style={{
      filter: darkMode ? "invert(1)" : "invert(0)",
      transition: "0.3s ease-in-out",
    }}
  />
</div>

        {/* Dark Mode Switch */}
        <button
          onClick={toggleDarkMode}
          className={`btn1 ${darkMode ? "text-warning" : "text-primary"} d-block d-md-block`}
          style={{ fontSize: "1.5rem" }}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Desktop Navigation - Hidden on Mobile */}
        <nav className="d-none d-lg-block">
          <ul className="nav">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li className="nav-item" key={item}>
                <a className={`nav-link ${darkMode ? "text-white" : "text-dark"}`} href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button - Always Visible */}
        <button
          className={`btn btn-outline-${darkMode ? "light" : "dark"} ms-2 d-lg-none`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Sidebar Navigation */}
      {menuOpen && (
        <nav
          id="sidebar"
          className={`position-fixed top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}
          style={{ zIndex: 100 }}
        >
          <button className={`btn btn-outline-${darkMode ? "light" : "dark"} mb-3`} onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
          <ul className="nav flex-column">
            {[
              { name: "Home", icon: <FaHome /> },
              { name: "About", icon: <FaUser /> },
              { name: "Services", icon: <FaTools /> },
              { name: "Projects", icon: <FaProjectDiagram /> },
              { name: "Contact", icon: <FaEnvelope /> },
            ].map(({ name, icon }) => (
              <li className="nav-item" key={name}>
                <a className={`nav-link ${darkMode ? "text-white" : "text-dark"}`} onClick={() => setMenuOpen(false)} href={`#${name.toLowerCase()}`}>
                  {icon} {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;