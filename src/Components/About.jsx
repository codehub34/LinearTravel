import './About.css';
import { FaGlobe, FaEye, FaHandshake } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

function About({ darkMode }) {
    const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true });
    const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true });
    const { ref: coreRef, inView: coreInView } = useInView({ triggerOnce: true });
    const openPdf = (event) => {
        event.preventDefault();
        // Open the PDF in a new tab
        window.open('Brand_Pillars_ Linear_Travel.pdf', '_blank');
    }

    return (
        <section className={`about ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
            <div className={`about-container ${darkMode ? "bg-none text-white" : "bg-dark text-dark"}`}>
                <div className='about-wrapper'>
                    
                    {/* Mission Section */}
                    <div ref={missionRef} className={`mission_content ${missionInView ? 'animate' : ''}`}>
                        <div className={`mission_items ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
                            <div className="mission_Icons"><FaGlobe size={45} /></div>
                            <h1 className={`h1 ${darkMode ? "text-white" : "bg-light text-none"}`}>MISSION</h1>
                            <p>We turn uncertain journeys into secure and direct paths, ensuring brighter futures.</p>
                            <div className="missionBtn">
                                <button className="missionBtn1" onClick={openPdf}>Learn More</button>
                            </div>
                        </div>
                    </div>

                    {/* Vision Section */}
                    <div ref={visionRef} className={`vision_content ${visionInView ? 'animate' : ''}`}>
                        <div className={`vision_items ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
                            <div className="vision_Icons"><FaEye size={45} /></div>
                            <h1 className={`h1 ${darkMode ? "bg-dark text-white" : "bg-light text-none"}`}>VISION</h1>
                            <p>We strive for a world where migration is safe, equitable, and empowering.</p>
                            <div className="visionBtn">
                                <button className="visionBtn1" onClick={openPdf}>Learn More</button>
                            </div>
                        </div>
                    </div>

                    {/* Core Value Section */}
                    <div ref={coreRef} className={`coreValue_content ${coreInView ? 'animate' : ''}`}>
                        <div className={`coreValue_items ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
                            <div className="coreValue_Icons"><FaHandshake size={45} /></div>
                            <h1 className={`h1 ${darkMode ? "bg-dark text-white" : "bg-light text-none"}`}>CORE VALUES</h1>
                            <p>Integrity, efficiency, and inclusivity form the backbone of our services.</p>
                            <div className="coreValueBtn">
                            <button className="coreValueBtn1" onClick={openPdf}>Learn More</button>
                           </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;