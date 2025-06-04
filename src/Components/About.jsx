import './About.css';
import { FaGlobe, FaEye, FaHandshake } from 'react-icons/fa'; // Importing icons

function About() {
    // Opens PDF file in a new tab
    const LearnMore = (event) => {
        event.preventDefault(); // Prevent default behavior
        window.open('https://docs.google.com/document/d/1tZiU6wITq1j8L2MwxLpz9rUGQM4aCJTNxHR3iSUpkmg/edit?tab=t.0', '_blank'); // Replace with actual PDF URL
    };

    return (
     
         <div className="about-container">
            <div className='about-wrapper'>
                {/* Mission Section */}
                <div className="mission_content">
                    <div className="mission_items">
                        <div className="mission_Icons"><FaGlobe size={45} /></div>
                        <h1>MISSION</h1>
                        <p>Our mission is to transform vulnerable journeys into safe, 
                            legal, and direct trajectories—unlocking brighter futures 
                            for our clients, their families, and the communities they touch. 
                            Through streamlined visa processes, pre-secured job placements, 
                            and holistic cultural coaching, we bridge the gap between 
                            aspiration and arrival.</p>

                        <div className="missionBtn">
                            <button className="missionBtn1" onClick={LearnMore}>Learn More</button>
                        </div>
                    </div>
                </div>

                {/* Vision Section */}
                <div className="vision_content">
                    <div className="vision_items">
                        <div className="vision_Icons"><FaEye size={45} /></div>
                        <h1>VISION</h1>
                        <p>We envision a world where ambitious individuals can travel, 
                            study, and work abroad seamlessly—without unnecessary 
                            obstacles. Our goal is to empower global mobility, ensuring 
                            success for every journey we facilitate.</p>

                        <div className="visionBtn">
                            <button className="visionBtn1">Learn More</button>
                        </div>
                    </div>
                </div>

                {/* Core Value Section */}
                <div className="coreValue_content">
                    <div className="coreValue_items">
                        <div className="coreValue_Icons"><FaHandshake size={45} /></div>
                        <h1>CORE VALUES</h1>
                        <p>Integrity, efficiency, and inclusivity form the backbone of 
                            our services. We are committed to providing ethical travel 
                            solutions that create lasting opportunities and meaningful 
                            global connections.</p>

                        <div className="coreValueBtn">
                            <button className="coreValueBtn1">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
      
        </div>
    );
}

export default About;