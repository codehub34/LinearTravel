import React, { useState } from "react";
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx"
import Footer from "./Components/Footer.jsx"

// import UserAuth from "./UserLogin/UserAuth.jsx";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);

  return (
    <div className={`app ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      {/* <UserAuth /> */}
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    </div>
  );
}

export default App;